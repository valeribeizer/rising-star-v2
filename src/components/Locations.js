import React from 'react';
import Carousel from './Carousel';

function Locations() {
    return (
      <section id="locations">
        <div>
          <h2>Locations</h2>
          <div className="row row-locations">
            <div className="col-8">
              <Carousel />
            </div>
            <div className="col-4">
              <ul className="ul-locations">
                <li>Sofia Skola</li>
                <li>Hjorthagshallen</li>
                <li>Nybohovsskolan</li>
                <li>Gullingeskolan</li>
                <li>Husbygårdsskolan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Locations;