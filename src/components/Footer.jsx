import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            You can reach me here:  
          <button type="button" class="btn btn-light btn-sm"><a href="https://www.linkedin.com/in/stevenelliott3/">LinkedIn</a></button>
          <button type="button" class="btn btn-light btn-sm"><a href="https://github.com/elliott-steven">GitHub</a></button>
          <button type="button" class="btn btn-light btn-sm"><a href="mailto:steven.elliott@live.com">Email Me</a></button>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
