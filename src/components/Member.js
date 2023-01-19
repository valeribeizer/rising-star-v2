import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

function Member() {
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

    const [buttonText, setButtonText] = useState("Send");
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
            "service_s5hiexk",
            "template_ni0imaa",
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
        setButtonText("We got it!");
      } else {
        setButtonText("Check your fields!");
      }
    };

    return (
      <section id="member">
        <div>
          <h2>Become a member</h2>
          <div className="row row-member">
            <div className="col-12 col-md-6 col-lg-6 text-center align-self-center">
              <img className="member-img" src="member-img.png" alt="img" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <form className="row g-3" onSubmit={sendEmail}>
                <div className="col-12 col-md-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First name*"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last name"
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
                    placeholder="Phone No.*"
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    rows="6"
                    className="form-control message"
                    name="message"
                    placeholder="Message*"
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
                      By clicking you agree to our{" "}
                      <a href="https://drive.google.com/file/d/1fGGo0IA23P43TwUKKcPjZCylH6Oq_YKv/view?usp=sharing">
                        Terms and Conditions
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-outline btn-navbar">
                    {buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Member;