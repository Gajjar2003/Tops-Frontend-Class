import React, { useContext } from "react";
import UserContext from "./Components/UserContext";
import Navbar from "./Components/Navbar";
import ThemeContext, { ThemeProvider } from "./Components/ThemeContext";
import { NotificationProvider } from "./Components/NotificationContext";
import NotificationDemo from "./Components/NotificationDemo";

function MainContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        backgroundColor: theme === "light" ? "white" : "#222",
        color: theme === "light" ? "black" : "white",
        textAlign: "center",
      }}
    >
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

function App() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Username: {user.username}</h2>
      <p>Logged In: {user.loggedIn ? "Yes" : "No"}</p>

      <Navbar />

      <ThemeProvider>
        <MainContent />
      </ThemeProvider>

      <NotificationProvider>
        <NotificationDemo />
      </NotificationProvider>
    </div>
  );
}

export default App;
