import "./styles.css";
import explore from "../../assets/images/1.png";
import { useEffect, useState } from "react";
import * as expAPI from "../../utilities/exp-api";
import ExpIndexCard from "../../components/expIndexCard/expIndexCard";

export default function ExpIndexPage() {
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    async function getAllExp() {
      try {
        const expData = await expAPI.index();
        setAllExp(expData); // ✅ تحديث الحالة
      } catch (err) {
        console.log(err);
      }
    }
    if (allExp.length === 0) getAllExp();
  }, []);

  return (
    <>
      <section className="page-header">
        <div className="header-content">
          <h1>Step Into a World of Experiences</h1>
          <img src={explore} alt="explore" className="header-icon" />
          <p>Embark on a journey of discovery and joy, where every experience tells a new story.</p>
        </div>
      </section>

      <section className="index-card-container">
        {allExp.map((experience) => (
          <ExpIndexCard key={experience.id} experience={experience} />
        ))}
      </section>
    </>
  );
}
