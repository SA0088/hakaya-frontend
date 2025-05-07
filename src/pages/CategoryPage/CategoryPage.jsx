import { useState, useEffect } from "react";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import * as categoriesAPI from "../../utilities/category-api";
import "./CategoryPage.css";

export default function CategoryIndexPage() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function fetchCategoriesWithExperiences() {
      try {
        const categories = await categoriesAPI.index();
        const detailedCategories = await Promise.all(
          categories.map(async (cat) => {
            const fullData = await categoriesAPI.getCategoryWithExperiences(cat.id);
            return fullData;
          })
        );
        setAllCategories(detailedCategories);
      } catch (err) {
        console.error("Error fetching categories with experiences:", err);
      }
    }

    fetchCategoriesWithExperiences();
  }, []);

  return (
    <>
      <section className="page-header1">
        <h1>Category List</h1>
      </section>
      <section className="index-card-container">
        {allCategories.length > 0 ? (
          allCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <p>No categories to display at the moment.</p>
        )}
      </section>
    </>
  );
}

