import "../../App.css";
export default function Home_card({ text, imG }) {
  return (
    <div className="home_card shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
      <div>
        <img src={imG} alt="idea" className="home_icons" />
      </div>
      <div>
        <h5 className="card-subtitle">{text}</h5>
      </div>
    </div>
  );
}
