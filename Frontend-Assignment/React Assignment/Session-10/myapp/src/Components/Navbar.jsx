import React, { useContext } from "react";
import UserContext from "./UserContext";

function Navbar() {
  const user = useContext(UserContext);

  return (
    <nav style={{ backgroundColor: "#333", padding: "15px" }}>
      <h2 style={{ color: "white" }}>
        Welcome, {user.username}
      </h2>
    </nav>
  );
}

export default Navbar;