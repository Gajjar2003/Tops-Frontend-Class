import React from "react";
import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";
import "./App.css";

function App() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
    },
  ];

  return (
    <div className="homepage">
      <div className="container">
        <h1 style={{'textAlign':"center"}}>InstaBio</h1>

        <p className="welcome" style={{'textAlign':"center"}}>
          Welcome to my profile!
        </p>

     
        <ProfileCard
          name="Jenil Gajjar"
          profilePicture="https://i.pravatar.cc/150?img=12"
          bio="Full Stack Developer | React & Django Learner"
        />

   
        <SocialLinks links={socialLinks}  />
      </div>
    </div>
  );
}

export default App;