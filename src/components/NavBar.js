import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const lngs = [
  { code: "en", native: "EN" },
  { code: "sv", native: "SW" },
  { code: "ru", native: "RU" },
];

function NavBar() {

  const { t, i18n } = useTranslation();
  const [navbar, setNavbar] = useState(false);

  const handleChange = (code) => {
    i18n.changeLanguage(code);
  };

  const handleCollapse = () => {
    var nav = document.getElementById("navbarNavAltMarkup");
    nav.classList.remove("show");
  };

   const changeBackground = () => {
     console.log(window.scrollY);
     if (window.scrollY >= 66) {
       setNavbar(true);
     } else {
       setNavbar(false);
     }
   };

   useEffect(() => {
     changeBackground();
     window.addEventListener("scroll", changeBackground);
   });

  return (
    <nav
      className={
        navbar
          ? "navbar navbar-expand-lg navbar-light sticky back"
          : "navbar navbar-expand-lg navbar-light sticky"
      }
    >
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
            <a className="nav-link px-4" href="#about" onClick={handleCollapse}>
              {t("about")}
            </a>
            <a
              className="nav-link px-4"
              href="#locations"
              onClick={handleCollapse}
            >
              {t("locations")}
            </a>
            <a
              className="nav-link px-4"
              href="#pricing"
              onClick={handleCollapse}
            >
              {t("prices")}
            </a>
            <a
              className="nav-link px-4"
              href="#member"
              onClick={handleCollapse}
            >
              {t("member")}
            </a>
            <a
              className="nav-link px-4"
              href="#contact"
              onClick={handleCollapse}
            >
              <button type="button" className="btn btn-outline btn-navbar">
                {t("contact")}
              </button>
            </a>
            {window.screen.width > 576 ? (
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
            ) : (
              <div class="btn-group dropend">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaGlobe style={{ color: "#f76262" }} />
                </button>
                <ul class="dropdown-menu">
                  {lngs.map((lng) => {
                    const { code, native } = lng;
                    return (
                      <button
                        className="btn btn-outline btn-navbar btn-rth"
                        onClick={() => handleChange(code)}
                      >
                        {native}
                      </button>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
