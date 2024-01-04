import React from "react";
import { useTranslation } from "react-i18next";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div>
        <AnimatedOnScroll
          animationIn="fadeInUp"
          style={{
            animationDuration: "5000ms",
          }}
        >
          <h2>{t("about")}</h2>
          <p className="about-section">{t("description1")}</p>
          <p className="about-section">{t("description2")}</p>
          <p className="about-section">
            <span>
              <a href="https://drive.google.com/file/d/1B73xSG3sv6Nvmv7M0LMVtFKgqsuAA_7E/view?usp=sharing">
                {t("click")}
              </a>
            </span>{" "}
            {t("statue")}
          </p>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

export default AboutUs;
