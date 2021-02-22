import React from "react";
import logo from "../images/B-logo.svg";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Header() {
  // let location = useLocation();
  // let path =
  //   location.pathname.length > 1
  //     ? location.pathname.replace("/blogs/", "id:")
  //     : "";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
        <div className="container">
          <a className="navbar-brand" href="/#">
            <img
              src={logo}
              className="App-logo"
              width="36"
              height="36"
              alt="logo"
            />{" "}
            BMJLINE
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
                <Link
                  className="nav-link"
                  to={`/about`}
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {path.length > 0 ? (
              <li
                className={
                  path.length > 0 ? "breadcrumb-item" : "breadcrumb-item active"
                }
              >
                <Link to={`/`}>Home</Link>
              </li>
            ) : (
              ""
            )}
            {path.length > 0 ? (
              <li className="breadcrumb-item active" aria-current="page">
                {path}
              </li>
            ) : (
              ""
            )}
          </ol>
        </nav>
      </div> */}
    </>
  );
}

export default Header;
