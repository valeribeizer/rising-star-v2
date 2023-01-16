import React from 'react';

function Contact() {
    return (
      <section id="contact">
        <div>
          <h2>Let's talk!</h2>
          <div className="row row-contact text-center">
            <div className="col-6">
              <img className="email-img" src="email-img.png" alt="email" />
              <div className="card card-contact">
                <h3>Drop us a letter!</h3>
                <p className="about-section">rg.risingstar@gmail.com</p>
              </div>
            </div>
            <div className="col-6">
              <img className="heart-img" src="heart-img.png" alt="heart" />
              <div
                className="card card-contact align-items-center"
                style={{ marginBottom: "10px" }}
              >
                <a
                  className="a-c"
                  href="https://www.instagram.com/rg.risingstar"
                >
                  <h3>Instagram us</h3>
                </a>
                <img className="line-img" src="line-img.png" alt="line" />
                <a
                  className="a-c"
                  href="https://www.facebook.com/rg.risingstar"
                >
                  <h3>Facebook us</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default  Contact;