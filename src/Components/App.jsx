import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Kit from "./Kit";
import About from "./About";
import Grad from "./Grad";
import Contact from "./Contact";
import Location from "./Location";
import Club from "./Club";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Kit />
      <About />
      <Grad />
      <Contact />
      <Location />
      <Club />
      <Footer />
    </div>
  );
}

export default App;
