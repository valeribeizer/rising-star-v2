import React from 'react';
import NavBar from './NavBar';

function Banner() {

    return (
      <div id="banner" className="banner">
        <NavBar />
        <div className="container banner-pic">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h1>Rising Star</h1>
              <h4 className="h4-banner">GYMNASTICS CLUB</h4>
              <a className="nav" href="#member">
                <button type="button" class="btn btn-banner">
                  BECOME A MEMBER
                </button>
              </a>
            </div>
            <div className="col-md-6 col-lg-6" style={{ paddingLeft: "0px" }}>
              <img className="gymn-img" src="banner_gymnast1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;