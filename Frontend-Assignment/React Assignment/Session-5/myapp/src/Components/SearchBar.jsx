import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h2>🛒 Flipkart Search</h2>

      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <h3 style={{ marginTop: "20px" }}>
        Search: {search}
      </h3>
    </div>
  );
}

export default SearchBar;