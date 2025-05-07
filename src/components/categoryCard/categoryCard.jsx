import React from "react";
import { Link } from "react-router";

export default function CategoryCard({ category, onClick }) {
  return (
    <div className="category-card" onClick={onClick}>
      <Link to={`/category/${category.id}/experiences`}>
        <div className="category-card-content">
          <h2>{category.name}</h2>

        </div>
      </Link>
    </div>
  );
}
