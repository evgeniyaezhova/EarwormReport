import React from "react"
import { Link } from "react-router-dom";
import "./styling/NavBar.css";


const NavBar = () => {
  return(
    <div>
    <nav className="navbar">
     <div className="links">
     <Link to="/">Home</Link>
     </div>
     <div className="links">
     <Link to="/songs">All Songs</Link>
     </div>
     <div className="links">
     <Link to="/songs/bypop">By Popularity</Link>
     </div>
     <div className="links">
     <Link to="/songs/bygenre">By Genre</Link>
     </div>
     <div className="links">
     <Link to="/profile">My Profile</Link>
     </div>
    </nav>
    </div>
  )
}

export default NavBar
