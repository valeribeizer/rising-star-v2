import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer">
        <footer>
          ©<span>{year}</span> | Designed & built with 🖤 by Valeryia B.
        </footer>
    </section>
  );
}

export default Footer;
