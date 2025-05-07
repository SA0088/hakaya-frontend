
import { useEffect, useState } from "react";
import * as expAPI from "../../utilities/exp-api";  // تأكد من استيراد الدالة بشكل صحيح
import ExperienceCard from "../../components/expIndexCard/expIndexCard"; // استيراد مكون البطاقة
import { useParams } from "react-router";

export default function CategoryExperiences({ categoryId }) {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    async function fetchExperiences() {
      try {
        const data = await expAPI.getExperiencesByCategory(id);
        console.log("Fetched experiences:", data);  // تحقق من البيانات
        setExperiences(data.experiences);
      } catch (err) {
        setError("Error fetching experiences");
        console.error(err);
      }
    }

    fetchExperiences();
  }, [categoryId]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Experiences in this Category</h2>
      <section className="index-card-container">
        {experiences.length ? (
          experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))
        ) : (
          <p>No experiences found for this category.</p>
        )}
      </section>
    </div>
  );
}
