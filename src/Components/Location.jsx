import React from "react";

function Location() {
  return (
    <iframe
      title="map"
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465314.13122792734!2d-6.834973044956322!3d53.41102682587954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486772e19f0ee6f1%3A0xc6b1ed92a1673a0c!2s16%20Liffey%20Ave%2C%20Liffey%20Valley%20Park%2C%20Lucan%2C%20Co.%20Dublin%2C%20K78%20HW50%2C%20Ireland!5e0!3m2!1sen!2sin!4v1675855391600!5m2!1sen!2sin"
      width="600"
      height="450"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Location;
