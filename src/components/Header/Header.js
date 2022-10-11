import { useState, react } from "react";
// import $ from 'jquery';
import "./Header.css";
import logo from "../../utils/images/logo.png";

const Header = () => {
    const [menuFocused,setMenuFocused] = useState(false)
    // $(document).ready(function(){
    //     $('.menu-toggle').on('click',function(){
    //         $('.menu-toggle').toggleClass('active');
    //     });
    // });
 
  return (
    <nav className="navBaritem">
      <div className="logo">
        <div className="profile">
          <img
            src={logo}
            height={48}
            width={48}
            style={{ borderRadius: "50%", marginRight: "1rem" }}
            alt=""
          />
        </div>
        <span className="name">AQIB KHAN</span>
      </div>
      {/* <div className="menu-icon"><i class="fa-solid fa-xmark"></i></div> */}
      <div onClick={()=>{setMenuFocused(!menuFocused)}} class={`menu-toggle ${menuFocused ? 'active' : ''}`}>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span> 
        </div>
        <div class="cross">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="menu">
        <ul className={menuFocused ? "menu-item active" : "menu-item"}>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
