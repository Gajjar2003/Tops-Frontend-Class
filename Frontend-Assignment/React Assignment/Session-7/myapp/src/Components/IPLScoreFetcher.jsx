import React, { useEffect, useState } from "react";

function IPLScoreFetcher() {
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setHeadline(data[0].title);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div>
      <h2>IPL Match Headline</h2>
      <p>{headline}</p>
    </div>
  );
}

export default IPLScoreFetcher;