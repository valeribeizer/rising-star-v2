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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8143.912915614517!2d18.046065!3d59.3166205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77c2c4eb0925%3A0xc8ac9708af4da467!2sGlobala%20gymnasiet!5e0!3m2!1sen!2sse!4v1704392645110!5m2!1sen!2sse"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16291.891420549411!2d18.028297479101564!3d59.308134100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77edf5c307f1%3A0x5d38975cdd9a3dbe!2sEriksdalsskolan!5e0!3m2!1sen!2sse!4v1704392722880!5m2!1sen!2sse"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5344.587529418744!2d18.007641049717414!3d59.33357679671398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f762a517a1a8b%3A0x6e2fe6580fcdaaed!2sThorildshallen!5e0!3m2!1sen!2sse!4v1704392812384!5m2!1sen!2sse"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.4031106468692!2d17.897318116059637!3d59.3929867816811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e54a575d0b9%3A0x1751391deac7e51d!2sGullingeskolan!5e0!3m2!1sen!2sse!4v1674080495683!5m2!1sen!2sse"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.3905900972516!2d17.92239941606031!3d59.40987928168707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9ee466bd05e1%3A0x6491d9001b5fe2da!2sHusbyg%C3%A5rdsskolan!5e0!3m2!1sen!2sse!4v1674080544116!5m2!1sen!2sse"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="carousel-item">
          <iframe
            title="s5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.8574030687303!2d17.838070676964374!3d59.36871877463339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9fe78991e06f%3A0x5481c9bea57a4059!2zSMOkc3NlbGJ5Z8OlcmRzc2tvbGFu!5e0!3m2!1sen!2sse!4v1704392886425!5m2!1sen!2sse"
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
