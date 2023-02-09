import React from "react";

function Club() {
  return (
    <div class="club">
      <h1>Join Earthly Club</h1>
      <p>
        Join our email list and get access to specials deals exclusive to our
        subscribers.
      </p>
      <label for="inputEmail4" class="form-label">
        Email *
      </label>
      <div class="club_input">
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          required
        ></input>
        <button type="submit" class="btn btn-success">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Club;
