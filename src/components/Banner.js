import React from 'react';
import { useTranslation } from "react-i18next";

function Banner() {
    const { t } = useTranslation();

    return (
      <div id="banner">
        <div className="container">
          <div className="row row-banner">
            <div className="col-lg-6 text-center align-self-center">
              <h1>Rising Star</h1>
              <h4 className="h4-banner">{t("club")}</h4>
              <a href="#member">
                <button type="button" class="btn btn-banner">
                  {t("member1")}
                </button>
              </a>
            </div>
            <div className="col-lg-6 text-center align-self-center">
              <img
                className="gymn-img"
                src="banner_gymnast.png"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;