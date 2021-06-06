import React, { useState } from "react";


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
        <br></br>
        <p>You can also reach me at any of the links below.</p>
      </div>      
    </div>
  )
}


export default Contact;
