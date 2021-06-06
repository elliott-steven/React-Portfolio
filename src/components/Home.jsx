import React from "react";
import face from "../img/face-img.jpg"


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-med-0"
              src={face}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">A Little About Me</h1>
            <p>
              My name is Steven Elliott. I come from a family of developers and decided i could join
              in. Who knows, maybe we can come up with something as a family and make some money. Most
              of my work experience is Customer Support or even Tech Support at times. I was a
              debugger for a short while but felt i didn't know enough to continue that path. I think
              i have what it takes to contribute and be successfully in a full stack development career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
