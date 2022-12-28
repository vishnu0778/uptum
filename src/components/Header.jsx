import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top header">
      <div className="container">
        <a className="navbar-brand title" href="#">
            Consumer Engineering
        </a>
        <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline mt-2 mt-md-0">
            <li className="dropdown profileCTA">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
                Profile <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="about-us">
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </li>
          </form>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
