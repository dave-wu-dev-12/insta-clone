import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header__container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPX3Ej-uhPxVXSoJZKSJ98Th53RSsKbit3ew&usqp=CAU"
        alt="logo"
        className="header__image"
      />
      <div className="logout__container">
        <p className="logout__text">LOGOUT</p>
        <Avatar
          className="logout__image"
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrpK0kJI2XZ3Wkt-K6Om3JpYdaxz2xYEgMqA&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Header;
