import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function SocialLinks({ links }) {
  return (
    <div className="social-links" >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
        >
          {link.name === "Instagram" && <FaInstagram />}
          {link.name === "LinkedIn" && <FaLinkedin />}
          {link.name === "GitHub" && <FaGithub />}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;