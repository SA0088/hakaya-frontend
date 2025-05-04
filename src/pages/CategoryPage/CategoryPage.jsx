import { useState, useEffect } from "react";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import * as categoriesAPI from "../../utilities/category-api";
import "./CategoryPage.css";
export default function CategoryIndexPage() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await categoriesAPI.index();
        if (Array.isArray(categories)) {
          setAllCategories(categories);
        } else {
          console.error("Invalid response: expected an array.");
        }
      } catch (err) {
        console.log("Error fetching categories:", err);
      }
    }
    
    fetchCategories(); // استدعاء الدالة مباشرة بدون شرط طول المصفوفة.
  }, []); // لا حاجة للتحقق من طول المصفوفة هنا، الدالة ستنفذ مرة واحدة فقط.

  return (
    <>
      <section className="page-header">
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
