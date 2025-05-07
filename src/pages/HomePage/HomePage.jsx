
import "./HomePage.css";
import explore from "../../assets/images/1.png";
import { Link } from "react-router";  // تأكد من أنك تستخدم رابط التوجيه الصحيح

export default function ExpIndexPage() {
  return (
    <main className="exp-page">
      <header className="exp-header">
        <div className="exp-header-content">
          <div className="exp-title-wrapper">
            <img src={explore} alt="Explore" className="exp-icon" />
            <h1 className="exp-title">Step Into a World of Experiences</h1>
          </div>
          <p className="exp-description">
            Embark on a journey of discovery and joy, where every experience tells a new story.
          </p>
        </div>
      </header>

      <p className="btn submit1">
        <Link to="/experiences">Discover more</Link>
      </p>
    </main>
  );
}
