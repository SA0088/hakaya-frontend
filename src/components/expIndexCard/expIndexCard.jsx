
import React from "react";
import { Link } from "react-router";
import "./expIndexCard.css";

export default function ExpIndexCard({ experience }) {
  return (
    <div className="index-card shadow-lg rounded-xl overflow-hidden border bg-white">
      <Link to={`/experiences/${experience.id}`}>
        <div className="index-card-content p-4 hover:bg-gray-50 transition duration-200">
          {experience.image_path && (
            <img
              src={experience.image_path}
              alt={experience.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
          )}
          <h2 className="text-xl font-semibold text-gray-800">{experience.title}</h2>
          <h3 className="text-sm text-gray-600 mt-1">
            Creator: {experience.creator?.username || "Unknown"}
          </h3>
          <p className="text-xs1">
            Created at: {new Date(experience.created_at).toLocaleDateString()}
          </p>
        </div>
      </Link>
    </div>
  );
}
