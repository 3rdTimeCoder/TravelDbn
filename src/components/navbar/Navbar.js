import React, { useState } from "react";
import TogglebarsOn from "@material-ui/icons/ToggleOn";
import TogglebarsOff from "@material-ui/icons/ToggleOff";
import { useHistory } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ home }) => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const refreshPage = ()=>{
    window.location.reload(false);
  }

  return (
    <header className={!home && "header"}>
      <h2 className="logo">TravelDBN</h2>
      <div className={showMenu ? "home__menu active" : "home__menu"}>
        <ul>
          <li onClick={() => history.push("/")}>home</li>
          <li onClick={() => history.push("/about")}>about</li>
          <li onClick={() => {
            history.push("/destinations")
            refreshPage()
            }}>destinations</li>
          <li onClick={() => history.push("/contact")}>contact</li>
        </ul>
      </div>
      <div className="toggle" onClick={toggleMenu}>
        {showMenu ? (
          <TogglebarsOn className="toggleIcon" />
        ) : (
          <TogglebarsOff className="toggleIcon" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
