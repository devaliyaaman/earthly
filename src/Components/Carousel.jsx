import React from "react";
function Carousel() {
  return (
    <div class="container" id="cor">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" style={{ height: "55rem" }}>
          <div class="item active ">
            <img
              src="https://static.wixstatic.com/media/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg/v1/fill/w_1429,h_628,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg"
              alt="Los Angeles"
              position="relative"
            ></img>
            <div class="carousel-content">
              <p>Join the Revolution</p>
              <h1>make it possible</h1>
            </div>
          </div>
          <div class="item">
            <img
              src="https://static.wixstatic.com/media/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg/v1/fill/w_1429,h_628,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg"
              alt="New york"
            ></img>
             <div class="carousel-content" id="c2">
              <p class="f1">BECOME</p>
              <p class="f2">Sustainable</p>
              <button class="btn btn-success">Start Today</button>
            </div>
          </div>

          <div class="item">
            <img
              src="https://static.wixstatic.com/media/ead566_3bf27d6bd94f4deabeb0feb674b0e28d~mv2.jpg/v1/fill/w_1895,h_849,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_3bf27d6bd94f4deabeb0feb674b0e28d~mv2.jpg"
              alt="Los Angeles"
            ></img>
             <div class="carousel-content" id="c3">
              <p class="f1">LIVING SUSTAINABLY</p>
              <p class="f2">Shouldn't be expressive</p>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
export default Carousel;
