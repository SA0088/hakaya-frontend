import React from "react";
import { Link } from "react-router";

export default function ExpIndexCard({ experience }) {
  return (
    <div className="index-card">
      <Link to={`/experience/${experience.id}`}>
        <div className="index-card-content">
          <img src={experience.image} alt={experience.title} />
          <h2>{experience.title}</h2>
          <h3>{experience.creator?.name || "Unknown"}</h3>
        </div>
      </Link>
    </div>
  );
}
