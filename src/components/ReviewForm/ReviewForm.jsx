import { useState } from "react";

export default function Reviewform({ addReview }) {
    const [formData, setFormData] = useState({
        comment: "",
        rate: 0,
    })

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        addReview(formData)
    }



    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="comment">Review:</label>
            <input id="comment" value={formData.comment} name="comment" type="text" onChange={handleChange} />
            <label htmlFor="rate">Rate:</label>
            <input id="rate" value={formData.rate}   name="rate" type="number" min="1" max="5" onChange={handleChange} />
            <button type="submit">Add Review</button>
        </form>
    )
}