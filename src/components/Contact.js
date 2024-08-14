import React from 'react';
import { useTranslation } from "react-i18next";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Contact() {
  const { t } = useTranslation();

    return (
      <section id="contact">
        <div>
         <AnimatedOnScroll
          animationIn="fadeInUp"
          style={{
            animationDuration: "3000ms",
          }}
        >
          <h2>{t('talk')}</h2>
          <div className="row row-contact text-center">
            <div className="col-6">
              <img className="email-img" src="email-img.png" alt="email" />
              <div className="card card-contact">
                <h3>{t('letter')}</h3>
                <p className="contact-section">rg.risingstar@gmail.com</p>
              </div>
            </div>
            <div className="col-6">
              <img className="heart-img" src="heart-img.png" alt="heart" />
              <div
                className="card card-contact align-self-center"
              >
                <a
                  className="a-c"
                  href="https://www.instagram.com/rg.risingstar"
                >
                  <h3>
                    Instagram
                  </h3>
                </a>
                <a
                  className="a-c"
                  href="https://www.facebook.com/rg.risingstar"
                >
                  <h3>
                    Facebook
                  </h3>
                </a>
              </div>
            </div>
          </div>
          </AnimatedOnScroll>
        </div>
      </section>
    );
};

export default  Contact;