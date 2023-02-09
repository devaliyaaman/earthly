import React from "react";
function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary" id="home">
        <div class="container-fluid">
          <img
            src="https://cdn-icons-png.flaticon.com/512/921/921475.png"
            alt="Earthly"
          ></img>
        </div>
        <div className="intro">
          <h1>Earthly</h1>
          <p>Sustainable Products at affordable price</p>
        </div>
        <ul className="navmenu">
          <li>
            <a href="#cor">Home</a>
          </li>
          <li>
            <a href="#kit">Shop</a>
          </li>
          <li id="getintouch">
            <a href="#contact">Get in Touch</a>
          </li>
        </ul>
        <div class="cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="cart"
          ></img>
        </div>
      </nav>
  );
}

export default Navbar;
