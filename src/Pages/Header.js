import React from 'react'
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/Header.css'
const Header = () => {
  return (
    <div className='main-header-div'>
      <div className="links">
      <Link style={{textDecoration:"none", color:"white" }}  to="/">Home</Link>
      <Link   style={{textDecoration:"none" , color:"white"}}to="contact">Contact</Link>
      <Link  style={{textDecoration:"none" , color:"white"}} to="about">About Us</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder='Search anything you want'/>
        <SearchIcon/>

      </div>
      </div>
  )
}

export default Header