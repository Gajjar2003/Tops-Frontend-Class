import { useState } from "react";

function PlaylistAdder() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (song.trim() === "" || artist.trim() === "") {
      alert("Please enter both song name and artist.");
      return;
    }

    const newSong = {
      song,
      artist,
    };

    setPlaylist([...playlist, newSong]);

    setSong("");
    setArtist("");
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center" }}>🎵 Spotify Playlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Song Name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Enter Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Add Song
        </button>
      </form>

      <h3>Playlist</h3>

      <ul>
        {playlist.map((item, index) => (
          <li key={index}>
            🎶 <strong>{item.song}</strong> - {item.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistAdder;