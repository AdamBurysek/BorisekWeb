import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid container-lg">
        <Link className="navbar-brand" to={"/"}>
          Full Text Search
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className={props.path === "/" ? "nav-link active" : "nav-link"}
              aria-current="page"
              to={"/"}
            >
              Search
            </Link>
            <Link
              className={
                props.path === "/newtable" ? "nav-link active" : "nav-link"
              }
              to={"/newtable"}
            >
              Add New Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
