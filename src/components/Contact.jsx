import React, { useState } from "react";
import resume from "../img/Resume_Steven_Elliott_Updated.pdf";


function Contact() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return (
    <div className="contact">
      <div className="container text-center">
        <h1>Message Me:</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name:</p>
              <input name="name" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Email Address:</p>
              <input name="email" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Leave A Message:</p>
              <input name="message" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        <img src={resume} alt=""/>
      </div>
      
    </div>
  )
}


export default Contact;
