// import React from "react";
// import { Link } from "react-router";

// export default function CategoryCard({ category }) {
//   console.log(category)
//   return (
//     <div className="category-card">
//       <Link to={`/categories/${category.id}`}>
//         <div className="category-card-content">
//           <img src={category.photo} alt={category.title} />
//           <h2>{category.name}</h2>
//           <h3>{category.description}</h3>
//           {/* <h3>{category.creator?.name || "Unknown"}</h3> */}
//         </div>
//       </Link>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router";

export default function CategoryCard({ category }) {
  if (!category) return null;

  return (
    <div className="category-card shadow-md rounded-2xl overflow-hidden border hover:shadow-lg transition">
      <Link to={`/categories/${category.id}`} className="block hover:opacity-90">
        <div className="category-card-content">
          <img
            src={category.photo}
            alt={`Category: ${category.name}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
            <p className="text-gray-600 mt-2 text-sm">{category.description}</p>
            {/* <p className="text-sm text-gray-500 mt-1">By: {category.creator?.name || "Unknown"}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

