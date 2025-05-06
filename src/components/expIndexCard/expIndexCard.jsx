// import React from "react";
// import { Link } from "react-router";

// export default function ExpIndexCard({ experience }) {
//   return (
//     <div className="index-card">
//       <Link to={`/experience/${experience.id}`}>
//         <div className="index-card-content">
//           <img src={experience.image} alt={experience.title} />
//           <h2>{experience.title}</h2>
//           <h3>{experience.creator?.name || "Unknown"}</h3>
//         </div>
//       </Link>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router";
import "./expIndexCard.css";

export default function ExpIndexCard({ experience }) {
  return (
    <div className="index-card shadow-lg rounded-xl overflow-hidden border">
        <Link to={`/experiences/${experience.id}`}>        <div className="index-card-content p-4 hover:bg-gray-50 transition">
          {experience.image_path && (
            <img
              src={experience.image_path}
              alt={experience.title}
              className="w-full h-48 object-cover mb-3"
            />
          )}
          <h2 className="text-xl font-semibold">{experience.title}</h2>
          <h3 className="text-sm text-gray-600">
            Creator: {experience.creator?.username || "Unknown"}
          </h3>
          <h4 className="exp-detail-create"><small>create at: {experience.created_at}</small></h4>

        </div>
      </Link>
    </div>
  );
}
