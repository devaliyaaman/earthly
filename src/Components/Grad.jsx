import React from "react";

function Grad() {
  return (
    <div id="grad1">
      <h1 id="gradh1">EARTHLY IS PLANT-BASED AND MADE FROM:</h1>
      <div class="gradBox">
        <div class="graditem" style={{ display: "flex" }}>
          <div class="data">
            <p>
            <h1>BAMBOO AND WHEAT FIBRE</h1>
            Sourced from local farmers, plant residue from Wheat, Barley, and
            Bamboo is molded into durable cups using our proprietary technology.
            </p>
          </div>
          <div class="gradimage">
            <img
              class="gradimg"
              src="https://static.wixstatic.com/media/ead566_972d942e7fcb48e6bc1ecc0ab5afd598~mv2.png/v1/fill/w_918,h_667,al_c,q_90,enc_auto/ead566_972d942e7fcb48e6bc1ecc0ab5afd598~mv2.png"
              alt=""
            ></img>
          </div>
        </div>

        <div class="graditem" style={{ display: "flex" }}>
          <div class="gradimage">
            <img
              class="gradimg"
              src="https://static.wixstatic.com/media/ead566_715f1190768b47d6b438a68d903211ec~mv2.png/v1/fill/w_839,h_667,al_c,q_90,enc_auto/ead566_715f1190768b47d6b438a68d903211ec~mv2.png"
              alt=""
            ></img>
          </div>
          <div class="data">
            <p>
              <h1>ORANGE FIBRE</h1>
              Made from Orange peels and other organic matter left behind after
              Orange is harvested.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grad;
