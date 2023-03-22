import React from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const lngs = [
  { code: "en", native: "EN" },
  { code: "sv", native: "SW" },
  { code: "ru", native: "RU" },
];

function NavBar() {

  const { t, i18n } = useTranslation();

  const handleChange = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid base">
        <a className="navbar-brand" href="#banner">
          <img className="nav-img" src="logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler ml-auto custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto d-flex align-items-center">
            <a className="nav-link px-4" href="#about">
              {t("about")}
            </a>
            <a className="nav-link px-4" href="#locations">
              {t("locations")}
            </a>
            <a className="nav-link px-4" href="#pricing">
              {t("prices")}
            </a>
            <a className="nav-link px-4" href="#member">
              {t("member")}
            </a>
            <a className="nav-link px-4" href="#contact">
              <button type="button" className="btn btn-outline btn-navbar">
                {t("contact")}
              </button>
            </a>
            <div className="dropdown">
              <FaGlobe style={{ color: "#f76262" }} />
              <div className="dropdown-content">
                {lngs.map((lng) => {
                  const { code, native } = lng;
                  return (
                    <button
                      className="btn btn-outline btn-navbar"
                      onClick={() => handleChange(code)}
                    >
                      {native}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
