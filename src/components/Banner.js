import React from 'react';
import NavBar from './NavBar';

function Banner() {

    return (
      <div id="banner" className="banner">
        <NavBar />
        <div className="container banner-pic">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm">
              <h1>Rising Star</h1>
              <h4 className="h4-banner">GYMNASTICS CLUB</h4>
              <button type="button" class="btn btn-banner">
                BECOME A MEMBER
              </button>
            </div>
            <div
              className="col-lg-6 col-md-4 col-sm"
              style={{ paddingLeft: "0px" }}
            >
              <img className="gymn-img" src="banner_gymnast1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;