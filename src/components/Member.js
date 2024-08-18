import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useTranslation } from "react-i18next";

function Member() {
  const { t } = useTranslation();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const checkboxTermsAndConditionsMessage = React.useMemo(
    () => "Please indicate that you accept the Terms and Conditions",
    []
  );

  const [buttonText, setButtonText] = useState(t("btn_text"));
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [isChecked, setIsChecked] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formDetails.firstName.length !== 0 &&
      formDetails.email.length !== 0 &&
      formDetails.phone.length !== 0 &&
      formDetails.message.length !== 0 &&
      isChecked
    ) {
      emailjs
        .sendForm(
          "service_oejz6ie",
          "template_cc0nhu2",
          e.target,
          "g3lRXYQqlKOkmc1vN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormDetails(formInitialDetails);
      setButtonText(t("btn_success_text"));
    } else {
      setButtonText(t("btn_error_text"));
    }
  };

  return (
    <section id="member">
      <div>
        <AnimatedOnScroll
          animationIn="fadeInUp"
          style={{
            animationDuration: "3000ms",
          }}
        >
          <h2>{t("talk")}</h2>
          <div className="row row-member">
            <div className="col-12 col-md-6 col-lg-6 text-center align-self-center">
              <img
                className="member-img"
                src="member-img.png"
                alt="img"
                loading="lazy"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <form className="row g-3" onSubmit={sendEmail}>
                <div className="col-12 col-md-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder={t("fname")}
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder={t("lname")}
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email*"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder={t("phone")}
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    rows="6"
                    className="form-control message"
                    name="message"
                    placeholder={t("msg")}
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      required={true}
                      validationMessage={checkboxTermsAndConditionsMessage}
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                    />
                    <label className="form-check-label" for="gridCheck">
                      {t("agree")}{" "}
                      <a href="https://drive.google.com/file/d/1fGGo0IA23P43TwUKKcPjZCylH6Oq_YKv/view?usp=sharing">
                        {t("terms")}
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ paddingRight: "0px", marginTop: "16px" }}
                >
                  <div className="col-6">
                    <button
                      type="submit"
                      className="btn btn-outline btn-navbar"
                    >
                      {buttonText}
                    </button>
                  </div>
                  <div
                    className="col-6 text-end"
                    style={{ paddingRight: "0px" }}
                  >
                    <a
                      className="a-c"
                      href="https://www.facebook.com/rg.risingstar"
                    >
                      <img src="facebook-icon.svg" alt="facebook" />
                    </a>
                    <a
                      className="a-c"
                      href="https://www.instagram.com/rg.risingstar"
                    >
                      <img
                        style={{ paddingLeft: "10px" }}
                        src="instagram-icon.svg"
                        alt="insta"
                      />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

export default Member;
