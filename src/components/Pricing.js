import React from 'react';

function Pricing() {
    return (
      <section id="pricing">
        <div>
          <h2>Prices</h2>
          <p className="about-section">
            These prices are valid for the term "Vår-2023".
          </p>
          <p className="about-section">
            Also there is a membership fee: 250 sek. It should be paid once a
            year. Sign * means opportunity to visit more than 3 trainings a week
            without additional fees. Also you get 10% discount for every
            additional membership in our club.
          </p>
          <div className="row row-pricing text-center">
            <div className="col-4">
              <div className="card">
                <h3>Beginners</h3>
                <ul>
                  <li>
                    1 time per week:{" "}
                    <h4>
                      1600<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    2 times per week:{" "}
                    <h4>
                      2500<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <h3>Intermediate</h3>
                <ul>
                  <li>
                    1 time per week:{" "}
                    <h4>
                      1800<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    2 times per week:{" "}
                    <h4>
                      2700<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    3 times per week:{" "}
                    <h4>
                      3500<small className="text-muted fw-light"> sek</small>*
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <h3>Stretching</h3>
                <ul>
                  <li>
                    1 class:{" "}
                    <h4>
                      150<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    1 time per week:{" "}
                    <h4>
                      1800<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    2 times per week:{" "}
                    <h4>
                      2500<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Pricing;