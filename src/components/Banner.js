import React from 'react';
import NavBar from './NavBar';

function Banner() {

    return (
      <div id="banner">
        <NavBar />
        <div className="container">
          <div className="row row-banner">
            <div className="col-lg-6 text-center align-self-center">
              <h1>Rising Star</h1>
              <h4 className="h4-banner">GYMNASTICS CLUB</h4>
              <a href="#member">
                <button type="button" class="btn btn-banner">
                  BECOME A MEMBER
                </button>
              </a>
            </div>
            <div className="col-lg-6 text-center align-self-center">
              <img className="gymn-img" src="banner_gymnast.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;