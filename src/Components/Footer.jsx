import React from "react";

function Footer() {
  return (
    <footer>
      {/* Copyright */}
      <h3>Made by Devaliyaaman</h3>

      {/* Language and social accounts */}
      <div id="media">
        <select name="language" id="language">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
          <option value="German">German</option>
        </select>

        <a href="https://www.facebook.com/wix" class="fa fa-facebook">
          {" "}
        </a>
        <a href="https://twitter.com/wix" class="fa fa-twitter">
          {" "}
        </a>
        <a
          href="https://www.linkedin.com/company/wix-com/?trk=public_jobs_topcard_logo&originalSubdomain=il"
          class="fa fa-linkedin"
        >
          {" "}
        </a>
        <a href="https://www.instagram.com/wix/" class="fa fa-instagram">
          {" "}
        </a>
        <a href="https://www.youtube.com/user/Wix" class="fa fa-youtube">
          {" "}
        </a>
      </div>

      {/* Chat Button */}
      <button id="chat">
        <a href="#home" class="fa fa-flickr">
          {" "}
        </a>
        Let's Chat!
      </button>
    </footer>
  );
}
export default Footer;
