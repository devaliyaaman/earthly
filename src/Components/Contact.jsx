import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div class="contact" id="contact">
      <div class="contactfrm">
        <div>
          <h1>
            <bold>Contact Us</bold>
          </h1>
          <p>
            16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50,
            Ireland
          </p>
          <p>hello@earthly.ie</p>
          <p>+353 1552 4908</p>
        </div>
        <ContactForm />
      </div>

      <div class="contactimg">
        <img
          src="https://www.nidhilakshmi.com/wp-content/uploads/2016/02/woman-contact.jpg"
          alt="."
        ></img>
      </div>
    </div>
  );
}

export default Contact;
