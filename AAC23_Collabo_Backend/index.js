const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const port = 3002;
app.use(cors({ origin: "http://localhost:3000" }));

// To connect to mongoDb
mongoose
  .connect("mongodb://127.0.0.1:27017/aac-collabo")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Register Schema
const user_Schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", user_Schema);

//MIDDLEWARE For Authentication
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .json({ message: "Access Denied. No Token Provided" });
  }

  jwt.verify(token, "JWT_SECRET", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }
    req.user = user;
    next();
  });
};

// Register API
app.post("/api/register", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    // if user doesnot exists
    const user_Data = await user.save(); // data gets saved in dataBase
    console.log(user_Data);
    // 201 if data created
    // res wih message 'success' is sent if new user is registered
    return res.status(201).json({ message: "success", data: user_Data }); // user_Data goes to frontend (response)
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

// Login API

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  //console.log(req.body);

  try {
    const user = await User.findOne({ email: email });
    if (user && user.password === password) {
      // If user exists and password is correct, generate JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        "JWT_SECRET",
        {
          expiresIn: "1h", // Token expires in 1 hour
        }
      );
      return res.status(200).json({
        message: "success",
        token: token,
        userId: user._id,
        userEmail: user.email,
      });
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error logging in", error: error.message });
  }
});

app.get("/api/myProfile/:userId", authenticateToken, async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password, ...userData } = user.toObject();
    return res.status(200).json({ user: userData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching user details", error: error.message });
  }
});

// PostPage.API

const projectSchema = new mongoose.Schema({
  idea: {
    type: String,
    required: true,
    maxLength: 100, // Name and idea of Project
  },
  description: {
    type: String,
    required: true,
    maxLength: 100, // Max 100 characters
  },
  skills: {
    type: [String], // An array of strings to store skills
    required: true,
  },
  hoursRequired: {
    type: Number, // Store hours required as a number
    required: true,
  },
  teamSize: {
    type: Number, // Store team size as a number
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // References the User model
    ref: "User",
    required: true, // Each feedback must belong to a user
  },
  datePosted: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);

app.post("/api/post", async (req, res) => {
  const { idea, description, skills, hoursRequired, teamSize, userId } =
    req.body;

  if (!idea || !description || !skills || !hoursRequired || !teamSize) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (isNaN(hoursRequired) || isNaN(teamSize)) {
    return res
      .status(400)
      .json({ message: "Hours required and team size must be valid numbers" });
  }

  try {
    const newProject = new Project({
      idea,
      description,
      skills: Array.isArray(skills)
        ? skills
        : skills.split(",").map((skill) => skill.trim()),
      hoursRequired,
      teamSize,
      userId,
    });
    console.log("project-----" + JSON.stringify(newProject));
    await newProject.save();
    res.status(201).json({ message: "success", project: newProject });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating project", error: error.message });
  }
});

// ContributePage.API
app.get("/api/Maincontribute", async (req, res) => {
  try {
    const projects = await Project.find();

    res.json(projects); // Return the projects as JSON
  } catch (error) {
    res.status(500).send("Error retrieving projects: " + error);
  }
});

//SEEMORE PAGE

// app.get("/api/seemore/:identifier", async (req, res) => {
//   const { identifier } = req.params;

//   // Check if the identifier is a valid MongoDB ObjectId
//   const isObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

//   try {
//     let project;
//     if (isObjectId(identifier)) {
//       // If it's a valid ObjectId, fetch the project by ID
//       project = await Project.findById(identifier);
//       if (!project) {
//         return res.status(404).json({ message: "Project not found." });
//       }
//       return res.json(project);
//     } else {
//       // If it's not an ObjectId, treat it as a search term
//       const projects = await Project.find({
//         idea: { $regex: new RegExp(identifier, 'i') } // Case-insensitive search
//       });

//       if (projects.length === 0) {
//         return res.status(404).json({ message: "No projects found." });
//       }
//       return res.json(projects);
//     }
//   } catch (error) {
//     console.error("Error fetching project:", error);
//     return res.status(500).json({ message: "Error fetching project." });
//   }
// });

app.get("/api/seemore/:identifier", async (req, res) => {
  const { identifier } = req.params;

  // Check if the identifier is a valid MongoDB ObjectId
  const isObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);
  try {
    let project;
    if (isObjectId(identifier)) {
      // If it's a valid ObjectId, fetch the project by ID
      console.log("Fetching project by ID:", identifier);
      project = await Project.findById(identifier).populate("userId");
      //.then((p) => console.log(p))
      //.catch((error) => console.log(error)); // Fetch all projects;
      if (!project) {
        console.log("No project found with ID:", identifier);
        return res.status(404).json({ message: "Project not found." });
      }
      // console.log("Project found:", project);
      return res.json(project);
    } else {
      // If it's not an ObjectId, treat it as a search term
      //console.log("Searching for projects with idea containing:", identifier);
      const projects = await Project.find({
        idea: { $regex: new RegExp(identifier, "i") }, // Case-insensitive search
      });

      // console.log("Projects found:", projects);
      if (projects.length === 0) {
        console.log("No projects found for search term:", identifier);
        return res.status(404).json({ message: "No projects found." });
      }
      return res.json(projects[0]);
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    return res.status(500).json({ message: "Error fetching project." });
  }
});

//FEEDBACK SCHEMA
const feedbackSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true, // Rating is required
    min: 1, // Rating must be between 1 and 5
    max: 5,
  },
  feedback: {
    type: String,
    required: false, // Feedback is optional
    maxlength: 500, // Limit the feedback length to 500 characters
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // References the User model
    ref: "User",
    required: true, // Each feedback must belong to a user
  },
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp when feedback is created
  },
});

// Create Feedback model
const Feedback = mongoose.model("Feedback", feedbackSchema);

//FEEDBACK PAGE

app.post("/api/feedback", async (req, res) => {
  const { rating, feedback, userId } = req.body;
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Rating must be between 1 and 5." });
  }
  try {
    // Save feedback to the database
    const newFeedback = new Feedback({
      rating,
      feedback,
      userId, // Assuming you have a user logged in
    });
    await newFeedback.save();
    res.status(200).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while saving feedback." });
  }
});

// Start server
app.listen(port, function (req, res) {
  console.log("Sever started at port " + port);
});
