import React from "react";

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.5207824444365!2d18.0140932160562!3d59.307560381651236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77b656ca9c49%3A0x84586bbe87522817!2sNybohovsskolan!5e0!3m2!1sen!2sse!4v1674080185783!5m2!1sen!2sse"
            style={{ filter: "invert(96%) hue-rotate(180deg)" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.1756725019911!2d18.090170216056435!3d59.313323481653235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f78031ffb64b7%3A0x4703100dc077b071!2sSofia%20skola!5e0!3m2!1sen!2sse!4v1674080379963!5m2!1sen!2sse"
            style={{ filter: "invert(96%) hue-rotate(180deg)" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.5597403787667!2d18.090733816058187!3d59.356996581668554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d99dd896f1d%3A0x95ff0d720f801978!2sHjorthagshallen!5e0!3m2!1sen!2sse!4v1674080448268!5m2!1sen!2sse"
            style={{ filter: "invert(96%) hue-rotate(180deg)" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.4031106468692!2d17.897318116059637!3d59.3929867816811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e54a575d0b9%3A0x1751391deac7e51d!2sGullingeskolan!5e0!3m2!1sen!2sse!4v1674080495683!5m2!1sen!2sse"
            style={{ filter: "invert(96%) hue-rotate(180deg)" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.3905900972516!2d17.92239941606031!3d59.40987928168707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9ee466bd05e1%3A0x6491d9001b5fe2da!2sHusbyg%C3%A5rdsskolan!5e0!3m2!1sen!2sse!4v1674080544116!5m2!1sen!2sse"
            style={{ filter: "invert(96%) hue-rotate(180deg)" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
