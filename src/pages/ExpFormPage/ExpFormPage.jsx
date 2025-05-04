// IMPORTS
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

// APIs
import * as expAPI from "../../utilities/exp-api";
import * as categoryAPI from "../../utilities/category-api"; // ✅ تمت إضافته

export default function ExpFormPage() {
  const initialState = {
    title: "",
    category: "",
    summary: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await categoryAPI.index(); 
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error("Returned categories are not an array.");
        }
      } catch (err) {
        console.log("Error fetching categories:", err);
      }
    }
    fetchCategories();
  }, []);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFileChange(evt) {
    const file = evt.target.files[0];
    setFormData({ ...formData, image: file });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      console.log(formData)
      const newExp = await expAPI.create(formData);
      setFormData(initialState);
      navigate(`/experiences/${newExp.id}`);
    } catch (err) {
      console.log("Error submitting form:", err);
    }
  }

  return (
    <>
      <div className="page-header">
        <h1>Add an Experience</h1>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <th><label htmlFor="id_image">Image:</label></th>
              <td><input type="file" name="image" accept="image/*" id="id_image" onChange={handleFileChange} /></td>
            </tr>
            <tr>
              <th><label htmlFor="id_title">Title:</label></th>
              <td><input value={formData.title} type="text" name="title" required id="id_title" onChange={handleChange} /></td>
            </tr>
            <tr>
              <th><label htmlFor="id_category">Category:</label></th>
              <td>
                <select name="category" value={formData.category} onChange={handleChange} required id="id_category">
                  <option value="">-- Select a category --</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th><label htmlFor="id_summary">Summary:</label></th>
              <td>
                <textarea value={formData.summary} name="summary" rows="5" required id="id_summary" onChange={handleChange}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn end submit">Submit!</button>
      </form>
    </>
  );
}
