import { BrowserRouter as Router, Link } from "react-router-dom"
import profilePic from "../Others/Images/profile-pic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Submenutoggle from "./Submenutoggle";
import { useState } from "react"
import Navitem from "./Navitem";


function Navbar(props) {
  return (
  <div className="navbar">
    <Router>
        <ul>
          <li className="logo"><Link to={"/"} className="profile-picture-link"><img src={profilePic} alt="" className="profile-picture"/></Link></li>
          <li className="item "><Link to={"/"}>Home</Link></li>
          <li className="item"><Link to ={"/"}>About Us</Link></li>
          <li className="item"><Link to={"/"}>News</Link></li>
          {/* Submenu part starts from here */}
          <li className="item has-submenu">
            <Link to={"/"} tabIndex="0">What We Offer</Link>
              <ul className="submenu">
                <li className="subitem"><Link to={"/"}>Design</Link></li>
                <li className="subitem"><Link to={"/"}>Development</Link></li>
                <li className="subitem"><Link to={"/"}>SEO</Link></li>
                <li className="subitem"><Link to={"/"}>Copywriting</Link></li>
              </ul>
          </li>
          {/* Submenu part ends here */}
          <li className="item"  ><Link to={"/"}>Contact Us</Link></li>
          {/* Last three items, including the button start here */}
          <li className="item button"><Link to={"/"}>Log In</Link></li>
          <li className="item button secondary"><Link to={"/"}>Sign Up</Link></li>
          <li className="toggle"><Link to={"/"}><FontAwesomeIcon icon={faBars}/></Link></li>
          {/* The last three items end here */}
        </ul>
      </Router>
  </div>);
}

export default Navbar;
