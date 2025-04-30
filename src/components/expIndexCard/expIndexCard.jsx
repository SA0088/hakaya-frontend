// /src/components/expIndexCard/expIndexCard.jsx
import React from "react";

const ExpIndexCard = () => {
  return (
    <div className="index-card">
      <h2>{experience.title}</h2>
      <h3>{experience.creator?.name || "Unknown"}</h3>
    </div>
  );
};

export default ExpIndexCard;  
