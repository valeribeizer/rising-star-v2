import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer">
      <AnimatedOnScroll
        animationIn="fadeInUp"
        style={{
          animationDuration: "5000ms",
        }}
      >
        <footer>
          ©<span>{year}</span> | Designed & built with 🖤 by Valeryia B.
        </footer>
      </AnimatedOnScroll>
    </section>
  );
}

export default Footer;
