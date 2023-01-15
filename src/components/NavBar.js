import React from 'react';

function NavBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid base">
          <a class="navbar-brand" href="#banner">
            <img src="logo.png" alt="" width="80" height="74" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link px-4" href="#about">
                About Us
              </a>
              <a class="nav-link px-4" href="#locations">
                Locations
              </a>
              <a class="nav-link px-4" href="#pricing">
                Prices
              </a>
              <a class="nav-link px-4" href="#member">
                Become a member
              </a>
              <button type="button" class="btn">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;