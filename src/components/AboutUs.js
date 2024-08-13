import React from "react";
import { useTranslation } from "react-i18next";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Slider from "react-slick";

function AboutUs() {
  const { t } = useTranslation();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gallery = [
    {
      src: "img1.png",
      alt: "img1",
    },
    {
      src: "img2.png",
      alt: "img2",
    },
    {
      src: "img3.png",
      alt: "img3",
    },
    {
      src: "img4.png",
      alt: "img4",
    },
    {
      src: "img5.png",
      alt: "img5",
    },
    {
      src: "img6.png",
      alt: "img6",
    },
    {
      src: "img7.png",
      alt: "img7",
    },
    {
      src: "img8.png",
      alt: "img8",
    }
  ];

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
          <div className="slider-container">
            <Slider {...settings}>
              {gallery.map(({ src, alt }, index) => (
                <div key={index}>
                  <img className="img-slider" src={src} alt={alt} />
                </div>
              ))}
            </Slider>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

export default AboutUs;
