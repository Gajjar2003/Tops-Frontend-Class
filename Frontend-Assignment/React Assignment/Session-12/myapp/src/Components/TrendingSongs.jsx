import React, { useEffect, useState } from "react";

function TrendingSongs() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(false);

  const fetchSongs = async () => {
    try {
      // Clear previous error before retry
      setError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      // Display first 3 titles
      setSongs(data.slice(0, 3));
    } catch (err) {
      console.error(err);

      // Show error message
      setError(true);
    }
  };

  // Fetch data when component loads
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <h1>Trending Songs</h1>

      {error ? (
        <div>
          <h2>Error loading data</h2>

          <button onClick={fetchSongs}>
            Reload
          </button>
        </div>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {song.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TrendingSongs;