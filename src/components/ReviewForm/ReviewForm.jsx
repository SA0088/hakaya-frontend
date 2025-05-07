
import { useState } from "react";

export default function Reviewform({ addReview }) {
    const [formData, setFormData] = useState({
        comment: "",
        rate: 0,
    });

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addReview(formData);
        // Reset form (اختياري)
        setFormData({ comment: "", rate: 0 });
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{ 
                display: "flex", 
                flexDirection: "column", 
                maxWidth: "400px", 
                margin: "20px auto", 
                padding: "20px", 
                border: "1px solid #ccc", 
                borderRadius: "10px", 
                backgroundColor: "#f9f9f9",
                fontFamily: "Arial, sans-serif"
            }}
        >
            <label htmlFor="comment" style={{ marginBottom: "5px", fontWeight: "bold" }}>Review:</label>
            <input 
                id="comment" 
                name="comment" 
                type="text" 
                value={formData.comment} 
                onChange={handleChange} 
                style={{ marginBottom: "15px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} 
            />

            <label htmlFor="rate" style={{ marginBottom: "5px", fontWeight: "bold" }}>Rate (1–5):</label>
            <input 
                id="rate" 
                name="rate" 
                type="number" 
                min="1" 
                max="5" 
                value={formData.rate} 
                onChange={handleChange} 
                style={{ marginBottom: "15px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} 
            />

            <button 
                type="submit" 
                style={{ 
                    padding: "10px", 
                    backgroundColor: "#8158a4", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "5px", 
                    cursor: "pointer" 
                }}
            >
                Add Review
            </button>
        </form>
    );
}
