import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";

function Header({ username, openModal, logoutApp }) {
  return (
    <div className="header__container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPX3Ej-uhPxVXSoJZKSJ98Th53RSsKbit3ew&usqp=CAU"
        alt="logo"
        className="header__image"
      />
      {username ? (
        <div className="logout__container">
          <p className="logout__text" onClick={logoutApp}>
            LOGOUT {username}
          </p>
          <Avatar
            className="logout__image"
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrpK0kJI2XZ3Wkt-K6Om3JpYdaxz2xYEgMqA&usqp=CAU"
          />
        </div>
      ) : (
        <div className="logout__container">
          <p className="logout__text" onClick={() => openModal("login")}>
            Log In |
          </p>
          <p className="logout__text" onClick={() => openModal("signup")}>
            Sign Up
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
