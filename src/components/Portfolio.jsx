import React from "react";
import logo1 from "../img/portfolio-project1.png"
import logo2 from "../img/pet-sit-city.png"
import logo3 from "../img/react-employee-directory.png"
import logo4 from "../img/react-google-books.png"

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container text-center">
        <h4>Samples of My Work</h4>
        <div className="row">
          <div className="tile col-md-5 mb-4">
            <img className="photo" src={logo1} alt=""/>
            <h6 className="mb-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://elliott-steven.github.io/project1-videogamesearch/"
              >

                Video Game Search
              </a>
            </h6>
            <p>We created a search engine that can find image and videos for your favorite video games.</p>

          
        </div>
        <div className="tile col-md-5 mb-4">
        <img className="photo" src={logo2} alt=""/>
          <h6 className="mb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/elliott-steven/Project_Monarch"
            >

              Pet Sit City
              </a>
          </h6>
          <p>This web app is to help Pet owners find relaible pet sitters in their area who they can use for diffrent services. </p>

        </div><div className="tile col-md-5 mb-4">
        <img className="photo" src={logo3} alt=""/>
          <h6 className="mb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/elliott-steven/React-Employee-Directory"
            >

              React Employee Directory
              </a>
          </h6>
          <p>This app utilizes an API to populate random employees in a directory. Users can search for employees by name or sort using the name field.</p>

        </div><div className="tile col-md-5 mb-4">
        <img className="photo" src={logo4} alt=""/>
          <h6 className="mb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/elliott-steven/react-google-book-search"
            >

              Video Game Search
              </a>
          </h6>
          <p>This app will allow a user to search books using the Google Book API. The user can then save books for later and then unsave when done.</p>

        </div>
      </div>
    </div>
    </div >

  );
}

export default Portfolio;
