import React from 'react';

function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid base">
          <a className="navbar-brand" href="#banner">
            <img className="nav-img" src="logo.png" alt="" />
          </a>
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
            <div className="navbar-nav ms-auto">
              <a className="nav-link px-4" href="#about">
                About Us
              </a>
              <a className="nav-link px-4" href="#locations">
                Locations
              </a>
              <a className="nav-link px-4" href="#pricing">
                Prices
              </a>
              <a className="nav-link px-4" href="#member">
                Become a member
              </a>
              <a className="nav-link px-4" href="#contact">
                <button type="button" class="btn">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;