
import React, { useState } from "react";

function AddReview() {

    const [review, setReview] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {

     
        e.preventDefault();

   
        setError("");

  
        if (review.trim() === "") {
            setError("Please enter a review before submitting.");
            return;
        }

        alert("Review submitted successfully!");

    
        setReview("");
    }

    return (
        <div className="container mt-5">

            <div
                className="card p-4 mx-auto"
                style={{ maxWidth: "500px" }}
            >

                <h2 className="text-center mb-4">
                    🍽️ Add Review
                </h2>

                <form onSubmit={handleSubmit}>

                    <label className="form-label">
                        Your Review
                    </label>

                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Write your review..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    ></textarea>

              
                    {error && (
                        <p className="text-danger mt-2">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn btn-danger w-100 mt-3"
                    >
                        Submit Review
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AddReview;

