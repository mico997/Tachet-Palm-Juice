import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h3 className="logo">LOGO</h3>
      </div>

      <div className="navbar-right">
        <h4>Products</h4>
        <h4>Services</h4>
        <h4>About Us</h4>
        <h4>More</h4>
        <h4>Sign Up</h4>
        <h4>Login</h4>
      </div>
    </div>
  );
};

export default Navbar;
