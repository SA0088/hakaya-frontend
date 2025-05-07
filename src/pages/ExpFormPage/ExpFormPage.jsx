
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import * as expAPI from "../../utilities/exp-api";
import * as categoryAPI from "../../utilities/category-api";
import "./ExpFormPage.css";

export default function ExpFormPage({ createExp, editExp, deleteExp }) {
  const initialState = {
    title: "",
    category: "",
    summary: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [currExp, setCurrExp] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("user")); 

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
    
    async function getAndSetDetail() {
      try {
        const exp = await expAPI.show(id);
        if (exp.creator?.id !== currentUser?.id) {
          navigate("/experiences"); 
        } else {
          setCurrExp(exp);
          setFormData(exp);
        }
      } catch (err) {
        console.log(err);
        setCurrExp(null);
        setFormData(initialState);
      }
    }

    if (editExp || deleteExp && id) getAndSetDetail();
    fetchCategories();
  }, [id, currentUser, navigate, editExp, deleteExp]);

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
      const newExp = await expAPI.create(formData);
      setFormData(initialState);
      navigate(`/experience/${newExp.id}`);
    } catch (err) {
      console.log("Error submitting form:", err);
    }
  }

  async function handleDelete(evt) {
    evt.preventDefault();
    try {
      const response = await expAPI.deleteExp(currExp.id);
      if (response.success) {
        setFormData(initialState);
        navigate("/experiences");
      }
    } catch (err) {
      console.log("Error deleting experience:", err);
    }
  }

  if (deleteExp && !currExp) return <h1>Loading</h1>;
  if (deleteExp && currExp) return (
    <>
      <div className="page-header">
        <h1>Delete Experience?</h1>
      </div>
      <h2>Are you sure you want to delete {currExp.title}?</h2>
      <form onSubmit={handleDelete}>
        <Link to={`/experience/${currExp.id}`} className="btn secondary">Cancel</Link>
        <button type="submit" className="btn danger">Yes - Delete!</button>
      </form>
    </>
  );

  if (editExp && !currExp) return <h1>Loading</h1>;

  return (
    <>
      <div className="page-header1">
        {editExp ? <h1>Edit {currExp.title}'s Info</h1> : <h1>Add an Experience</h1>}
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <table>
          <tbody>
  
            <tr>
            <th><label htmlFor="id_image">Image URL:</label></th>
              <td>
                <input
                  type="text"
                  id="id_image"
                  name="image_path"
                  value={formData.image_path}
                  onChange={(e) =>
                    setFormData({ ...formData, image_path: e.target.value })
                  }
                  className="border rounded px-2 py-1 w-full"
                  placeholder="Enter image URL"
                />
                {formData.image_path && (
                  <img
                    src={formData.image_path}
                    alt={formData.title}
                    className="exp-detail-image mt-2"
                  />
                )}
              </td>
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
        <button type="submit" className="submit2">Submit!</button>
      </form>
    </>
  );
}
