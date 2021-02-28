import React from "react";
import logo from "../images/B-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center header">
        <div className="container">
          <a className="navbar-brand" href="/#">
            <img
              src={logo}
              className="App-logo"
              width="36"
              height="36"
              alt="logo"
            />{" "}
            <span style={{ paddingLeft: "0.2rem" }}>BMJLINE</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={`/`}>
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/about`}>
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
