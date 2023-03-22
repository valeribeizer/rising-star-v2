import React from 'react';
import { useTranslation } from 'react-i18next';

function Pricing() {
  const { t } = useTranslation();

    return (
      <section id="pricing">
        <div>
          <h2>{t("prices")}</h2>
          <p className="about-section">{t("validation")} "Vår-2023".</p>
          <p className="about-section">{t("price_info")}</p>
          <div className="row row-pricing text-center">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 cards-pr">
              <div className="card">
                <h3>{t("beginners")}</h3>
                <ul>
                  <li>
                    {t("one_time")}:{" "}
                    <h4>
                      1600<small className="text-muted fw-light"> sek</small>
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
                <h3>{t("intermediate")}</h3>
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
                      2700<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
                  <li>
                    {t("three")}:{" "}
                    <h4>
                      3500<small className="text-muted fw-light"> sek</small>*
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 cards-pr">
              <div className="card">
                <h3>Stretching</h3>
                <ul>
                  <li>
                    1 {t("class")}:{" "}
                    <h4>
                      150<small className="text-muted fw-light"> sek</small>
                    </h4>
                  </li>
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
          </div>
        </div>
      </section>
    );
};

export default Pricing;