import React from "react";
import Carousel from "./Carousel";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useTranslation } from "react-i18next";

function Locations() {
  const { t } = useTranslation();
  return (
    <section id="locations">
      <div>
        <AnimatedOnScroll
          animationIn="fadeInUp"
          style={{
            animationDuration: "5000ms",
          }}
        >
          <h2>{t("locations")}</h2>
          <div className="row row-locations">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 text-center align-self-center">
              <Carousel />
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center align-self-center">
              <ul>
                <li>Globala Gymnasiet</li>
                <li>Eriksdalsskolan</li>
                <li>Thoridshallen</li>
                <li>Gullingeskolan</li>
                <li>Husbygårdsskolan</li>
                <li>Hässelbygårdsskolan</li>
              </ul>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

export default Locations;
