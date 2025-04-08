// import React, { useEffect, useState } from 'react';

// const MyProfile = ({ userId }) => {
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3002/api/myProfile/${userId}`);
//         const data = await response.json();
//         if (data.message === "Profile retrieved successfully") {
//           setProfileData(data.data);
//         } else {
//           setError(data.message);
//         }
//       } catch (err) {
//         setError("Error fetching profile data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, [userId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>{profileData.firstName} {profileData.lastName}</h1>
//       <p>Email: {profileData.email}</p>
//       <p>Skills: {profileData.skills}</p>
//       <p>Previous Projects: {profileData.previousProjects}</p>
//       {/* Add buttons or links for editing profile, etc. */}
//     </div>
//   );
// };

// export default MyProfile;
import React, { useEffect, useState } from "react";

const MyProfilePage = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/api/myProfile/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await response.json();
        setProfile(data.data); // Assuming the data is in the 'data' field
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>My Profile</h2>
      <p>
        Name: {profile.firstName} {profile.lastName}
      </p>
      <p>Email: {profile.email}</p>
      <p>Skills: {profile.skills}</p>
      <p>Previous Projects: {profile.previousProjects}</p>
    </div>
  );
};

export default MyProfilePage;
