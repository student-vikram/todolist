// Import React
import React from "react";

// Define Footer component
const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor: "#f8f8f8", padding: "20px"}}>
      <div className="footer-content" style={{display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "1200px"}}> 
      </div>
      <hr style={{border: "0.5px solid #ddd", margin: "20px 0"}}/>
      <p style={{fontSize: "12px", color: "#666", textAlign: "center"}}>&copy; 2023 My Todo App</p>
    </footer>
  );
};

export default Footer;
