import React, { useState } from "react";
import axios from "axios";

function AddComment() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          name: username,
          body: comment,
        }
      );

      // Store API response
      setResponse(result.data);

      // Clear form
      setUsername("");
      setComment("");
    } catch (error) {
      console.error(error);
      setError("Failed to submit comment.");
    }
  };

  return (
    <div>
      <h1>Add Comment</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>

        <br />

        <div>
          <label>Comment:</label>
          <br />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
            required
          />
        </div>

        <br />

        <button type="submit">
          Submit Comment
        </button>
      </form>

      {/* Display error */}
      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {/* Display API response */}
      {response && (
        <div>
          <h2>Response</h2>

          <p>
            <strong>ID:</strong> {response.id}
          </p>

          <p>
            <strong>Username:</strong> {response.name}
          </p>

          <p>
            <strong>Comment:</strong> {response.body}
          </p>

          <p>
            <strong>Email:</strong> {response.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default AddComment;