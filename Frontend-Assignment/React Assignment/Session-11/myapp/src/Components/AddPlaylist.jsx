import React, { useState } from "react";
import axios from "axios";

function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: playlistName,
          body: description,
        }
      );

      console.log("Response:", response.data);

      setMessage("Playlist added successfully!");

      // Clear form fields
      setPlaylistName("");
      setDescription("");
    } catch (error) {
      console.error(error);
      setMessage("Failed to add playlist.");
    }
  };

  return (
    <div>
      <h1>Add Playlist</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Playlist Name:</label>
          <br />
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="Enter playlist name"
            required
          />
        </div>

        <br />

        <div>
          <label>Description:</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter playlist description"
            required
          />
        </div>

        <br />

        <button type="submit">
          Add Playlist
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddPlaylist;