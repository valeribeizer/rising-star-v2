import React from 'react';

function Carousel() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" align="center">
          <div className="carousel-item active">
            <iframe
              title="s1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.520782444427!2d18.01409321606383!3d59.307560381651236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77b656ca9c49%3A0x84586bbe87522817!2sNybohovsskolan!5e0!3m2!1sru!2sse!4v1673717179108!5m2!1sru!2sse"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="s2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.1756725019939!2d18.090170216064074!3d59.3133234816532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f78031ffb64b7%3A0x4703100dc077b071!2sSofia%20skola!5e0!3m2!1sru!2sse!4v1673720629294!5m2!1sru!2sse"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="s3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.559740378768!2d18.09073381606586!3d59.35699658166853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d99dd896f1d%3A0x95ff0d720f801978!2sHjorthagshallen!5e0!3m2!1sru!2sse!4v1673720659599!5m2!1sru!2sse"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="s4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.4031106468692!2d17.897318116067293!3d59.3929867816811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e54a575d0b9%3A0x1751391deac7e51d!2sGullingeskolan!5e0!3m2!1sru!2sse!4v1673720752799!5m2!1sru!2sse"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="s5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.3905900972516!2d17.922399416068004!3d59.40987928168707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9ee466bd05e1%3A0x6491d9001b5fe2da!2sHusbyg%C3%A5rdsskolan!5e0!3m2!1sru!2sse!4v1673720789948!5m2!1sru!2sse"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Carousel;