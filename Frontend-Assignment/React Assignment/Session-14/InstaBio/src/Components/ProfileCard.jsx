import React from "react";

function ProfileCard({ name, profilePicture, bio }) {
  return (
    <div className="profile-card">
      <img
        src={profilePicture}
        alt={name}
        className="profile-picture"
      />

      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;