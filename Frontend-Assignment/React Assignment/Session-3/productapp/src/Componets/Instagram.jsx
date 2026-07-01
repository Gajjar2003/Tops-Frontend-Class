import React from 'react'
import instagram from '../assets/IRNH7652.JPG'

function Instagram(props) {
    const instagraminfo = props.instagram
  return (
    <div style={{
        width: "300px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}>

         <img src={instagram} alt="Instagram"
      
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
        <h2>{instagraminfo.username}</h2>

      <p>👥 Followers: {instagraminfo.followers}</p>

         <button
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#0095f6",
          color: "white",
          cursor: "pointer",
        }}
      >
        Follow
      </button>
    </div>
  )
}

export default Instagram
