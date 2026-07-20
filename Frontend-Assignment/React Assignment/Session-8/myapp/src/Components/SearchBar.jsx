import React, { useRef, useEffect } from "react";

function SearchBar() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Search Bar</h2>

      <input
        type="text"
        placeholder="Search..."
        ref={inputRef}
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;