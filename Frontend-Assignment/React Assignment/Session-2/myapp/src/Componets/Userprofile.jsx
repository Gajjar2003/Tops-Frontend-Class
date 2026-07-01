import React from 'react'
import profiles from '../assets/IRNH7652.JPG'

function Userprofile() {
  return (
    <div  style={{
        width: "300px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img src ={profiles} alt = "User Profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
        }}/>
        <img />
      <h2>Wel come To User Profile</h2>
      <p>lore ipsum dolor sit amet</p>
      <p>Javascript | React | Node.js</p>
    </div>
  )
}

export default Userprofile
