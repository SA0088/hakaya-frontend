
import "./HomePage.css";
import explore from "../../assets/images/1.png";
import { useEffect, useState } from "react";
import * as expAPI from "../../utilities/exp-api";
import { Link } from "react-router";  // تأكد من أنك تستخدم رابط التوجيه الصحيح
// import ExpIndexCard from "../../components/expIndexCard/expIndexCard";

export default function ExpIndexPage() {
  const [allExp, setAllExp] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllExp() {
      try {
        const expData = await expAPI.index();
        if (Array.isArray(expData)) {
          setAllExp(expData);  // تحديث الحالة مع التجارب المحملة
        } else {
          console.error("Expected an array but got:", expData);
        }
      } catch (err) {
        console.log("Failed to fetch experiences:", err);
      } finally {
        setLoading(false);  // تغيير حالة التحميل بعد تحميل البيانات
      }
    }

    getAllExp();
  }, []);

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

      {/* رابط لاكتشاف المزيد من التجارب */}
      <p className="btn submit">
        <Link to="/experiences">Discover more</Link>
      </p>
    </main>
  );
}
