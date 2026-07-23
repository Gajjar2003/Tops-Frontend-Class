import React, { useEffect, useState } from "react";

function IPLScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(false);

  const fetchScores = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // Throw an error if status is not 200
      if (response.status !== 200) {
        throw new Error("Failed to load scores");
      }

      const data = await response.json();

      // Convert user data into dummy cricket scores
      const dummyScores = data.slice(0, 5).map((user, index) => ({
        id: user.id,
        team: user.company.name,
        score: `${120 + index * 15}/${index + 2}`,
        overs: `${15 + index}.4`,
      }));

      setScores(dummyScores);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  if (error) {
    return <h2>Error loading scores</h2>;
  }

  return (
    <div>
      <h1>IPL Live Scores</h1>

      {scores.map((match) => (
        <div key={match.id}>
          <h3>{match.team}</h3>

          <p>
            Score: {match.score} | Overs: {match.overs}
          </p>
        </div>
      ))}
    </div>
  );
}

export default IPLScores;