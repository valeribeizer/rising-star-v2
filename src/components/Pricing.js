import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useTranslation } from "react-i18next";

function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing">
      <div>
        <AnimatedOnScroll
          animationIn="fadeInUp"
          style={{
            animationDuration: "5000ms",
          }}
        >
          <h2>{t("prices")}</h2>
          <p className="about-section">{t("validation")} "Vår-2024".</p>
          <p className="about-section">{t("price_info")}</p>
          <div className="row row-pricing text-center">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 cards-pr">
              <div className="card">
                <h3>Pokemons/Wizards</h3>
                <ul>
                  <li>
                    {t("one_time")}:{" "}
                    <h4>
                      1800<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    {t("twice")}:{" "}
                    <h4>
                      2500<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 cards-pr">
              <div className="card">
                <h3>Smurfs</h3>
                <ul>
                  <li>
                    {t("one_time")}:{" "}
                    <h4>
                      2000<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    {t("twice")}:{" "}
                    <h4>
                      2700<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    {t("three")}:{" "}
                    <h4>
                      3400<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 cards-pr">
              <div className="card">
                <h3>Unicorns/Superheroes</h3>
                <ul>
                  <li>
                    {t("one_time")}:{" "}
                    <h4>
                      2200<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    {t("twice")}:{" "}
                    <h4>
                      2900<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    {t("three")}:{" "}
                    <h4>
                      3800<small className="text-muted fw-light"> sek</small>*
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

export default Pricing;
