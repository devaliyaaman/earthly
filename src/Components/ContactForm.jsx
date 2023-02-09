import React from "react";

function ContactForm() {
  return (
    <div class="form">
      <h2>Get in Touch</h2>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputFirstName" class="form-label">
            First Name
          </label>
          <input type="text" class="form-control fc" id="firstName"></input>
        </div>
        <div class="col-md-6">
          <label for="inputLastName" class="form-label">
            Last Name
          </label>
          <input type="text" class="form-control fc" id="lastName"></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email *
          </label>
          <input
            type="email"
            class="form-control fc"
            id="inputEmail4"
            required
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputPhone" class="form-label">
            Phone
          </label>
          <input type="number" class="form-control fc " id="inputPhone"></input>
        </div>
        <div class="col-md-12 message">
          <label for="inputMessage" class="form-label">
            Message
          </label>
          <input
            type="text"
            style={{ height: "10rem" }}
            class="form-control fc"
            id="inputMessage"
            placeholder=""
          ></input>
        </div>
        <div class="col-md-12">
          <button type="submit" class="btn btn-success col-md-12">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
