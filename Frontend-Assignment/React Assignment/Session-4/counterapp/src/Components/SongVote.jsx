import { useState } from "react";

function SongVote() {
  const [votes, setVotes] = useState(0);

  const upVote = () => {
    setVotes(votes + 1);
  };

  const downVote = () => {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h2>🎵 Spotify Playlist</h2>

      <h3>Song: Perfect - Ed Sheeran</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={upVote}
          style={{
            fontSize: "20px",
            padding: "8px 15px",
            cursor: "pointer",
          }}
        >
          ⬆️
        </button>

        <h2>{votes}</h2>

        <button
          onClick={downVote}
          style={{
            fontSize: "20px",
            padding: "8px 15px",
            cursor: "pointer",
          }}
        >
          ⬇️
        </button>
      </div>
    </div>
  );
}

export default SongVote;