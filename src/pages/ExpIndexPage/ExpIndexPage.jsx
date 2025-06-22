// IMPORTS
import { useState, useEffect } from "react";
import { Link } from "react-router"; 
import "./ExpIndexPage.css"
// COMPONENTS
import ExpIndexCard from "../../components/expIndexCard/expIndexCard";

// APIs
import * as expAPI from "../../utilities/exp-api";

export default function ExpIndexPage() {
  const [allExperiences, setAllExperiences] = useState([]);

  useEffect(() => {
    async function getAllExps() {
      try {
        const expData = await expAPI.index();
        console.log("Fetched experiences:", expData);
        setAllExperiences(expData)
      } catch (err) {
        console.log("Error fetching experiences:", err);
      }
    }

    getAllExps();
  }, []);


 
    const displayAllExps = Array.isArray(allExperiences)
      ? allExperiences.map((exp) => (
          <ExpIndexCard key={exp.id} experience={exp} />
        ))
    : [];
    return (
      <>
        <section className="page-header1">
          <h1>Experiences List</h1>
        </section>
        <p className="btn submit1">
          <Link to="/experiences/new">Add your Experience</Link>
        </p>
        <section className="index-card-container">
          {displayAllExps.length > 0 ? (
            displayAllExps
          ) : (
            <p>No experiences to display.</p>
          )}
        </section>
      </>
  );
}
