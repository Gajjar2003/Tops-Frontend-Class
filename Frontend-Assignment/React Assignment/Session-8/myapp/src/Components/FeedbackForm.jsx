import React, { useState, useRef } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const messageRef = useRef(null);

  const handleFocus = () => {
    messageRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Message:", message);

    setName("");
    setMessage("");
  };

  return (
    <div>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter your message"
          value={message}
          ref={messageRef}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>

        <button
          type="button"
          onClick={handleFocus}
          style={{ marginLeft: "10px" }}
        >
          Focus Message
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;