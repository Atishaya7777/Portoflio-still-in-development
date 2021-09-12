import React from 'react'
import Hero from "./Components/Hero"
import Navbar from './Components/Navbar'
import "./App.css"
import { useState } from "react"
import Navitem from './Components/Navitem'
import { BrowserRouter as Router, Link } from "react-router-dom"
import profilePic from "./Others/Images/profile-pic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SubMenuItem } from './Components/SubMenuItem'
import CentralText from './Components/CentralText'

const App = () => {
  return (
    <div className="container-page">
      <Hero>
        <Navbar >
          {/* If the type is text, the class of the resulting list
          item will be .item . If the type is logo, the class of the 
          resulting item will be .logo . If the type is toggle, the class
          of the resulting list item will be .toggle */}
          <li className="logo"><Link to={"/"} className="profile-picture-link"><img src={profilePic} alt="" className="profile-picture"/></Link></li>
          <Navitem item="Home" type="text" ></Navitem>
          <Navitem item="About Me" type="text"></Navitem>
          <Navitem item="News" type="text"></Navitem>
          <Navitem item="What I Offer " type="hasSubMenu">
            <SubMenuItem toLink={"/"} item="Design"></SubMenuItem>
            <SubMenuItem toLink={"/"} item="Development"></SubMenuItem>
            <SubMenuItem toLink={"/"} item="SEO"></SubMenuItem>
            <SubMenuItem toLink={"/"} item="Copywriting"></SubMenuItem>
          </Navitem>
          <Navitem item="Contact Me" type="text"></Navitem>
          <Navitem item="Log In" type="text"></Navitem>
          <Navitem item="Sign Up" type="text"></Navitem>
          <li className="toggle"><Link to={"/"}><FontAwesomeIcon icon={faBars}/></Link></li>
        </Navbar>
        <CentralText />
      </Hero>
    </div>
  )
}



export default App
