import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/images/logo/de Compras.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [toggle,setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-links-desktop">
                <li onClick={() => { setMenu("home") }}><Link to='/' className={`pages ${menu === "home" ? 'active-page' : ''}`}>Home</Link></li>
                <li onClick={() => { setMenu("shop") }}><Link to='/shop' className={`pages ${menu === "shop" ? 'active-page' : ''}`}>Shop</Link></li>
                <li onClick={() => { setMenu("blog") }}><Link to='/blog' className={`pages ${menu === "blog" ? 'active-page' : ''}`}>Blog</Link></li>
                <li onClick={() => { setMenu("about") }}><Link to='/about' className={`pages ${menu === "about" ? 'active-page' : ''}`}>About</Link></li>
                <li onClick={() => { setMenu("contact") }}><Link to='/contact' className={`pages ${menu === "contact" ? 'active-page' : ''}`}>Contact Us</Link></li>
                <li onClick={() => { setMenu("login") }}><Link to='/login' className={`pages ${menu === "login" ? 'active-page' : ''}`}>Login/Sign Up</Link></li>
                <li onClick={() => { setMenu("cart") }}><Link to='/cart' className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`}><FontAwesomeIcon icon={faCartShopping} className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`} /></Link></li>
     </ul>

     {/* Toggle Button */}
      <div>
        <button onClick={()=>setToggle((pre)=>!pre)}>
        <FontAwesomeIcon icon={faBars} className="menu-bar-icon" />
        </button>
      </div>


      {/* Navbar menu for Mobile */}
    {
        toggle ?   <div className="nav-link-mobile-container">
                      <ul className="nav-links-mobile">
                <li onClick={() => { setMenu("home"); setToggle(false) }}><Link to='/' className={`pages ${menu === "home" ? 'active-page' : ''}`}>Home</Link></li>
                <li onClick={() => { setMenu("shop"); setToggle(false) }}><Link to='/shop' className={`pages ${menu === "shop" ? 'active-page' : ''}`}>Shop</Link></li>
                <li onClick={() => { setMenu("blog"); setToggle(false)  }}><Link to='/blog' className={`pages ${menu === "blog" ? 'active-page' : ''}`}>Blog</Link></li>
                <li onClick={() => { setMenu("about"); setToggle(false)  }}><Link to='/about' className={`pages ${menu === "about" ? 'active-page' : ''}`}>About</Link></li>
                <li onClick={() => { setMenu("contact"); setToggle(false)  }}><Link to='/contact' className={`pages ${menu === "contact" ? 'active-page' : ''}`}>Contact Us</Link></li>
                <li onClick={() => { setMenu("login"); setToggle(false)  }}><Link to='/login' className={`pages ${menu === "login" ? 'active-page' : ''}`}>Login/Sign Up</Link></li>
                <li onClick={() => { setMenu("cart"); setToggle(false)  }}><Link to='/cart' className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`}><FontAwesomeIcon icon={faCartShopping} className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`} /></Link></li>
     </ul>
                  </div> : ""
    }




    </div>
  );
};

export default Navbar;
