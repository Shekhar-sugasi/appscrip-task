import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="col">
          <h4>Be the first to know</h4>
          <p>Sign up for our mailing list.</p>
          <input className="email-input" placeholder="Enter your email" />
        </div>

        <div className="col">
          <h4>Quick Links</h4>
          <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="col">
          <h4>Follow</h4>
          <div>Instagram • Facebook • LinkedIn</div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Appscrip Demo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
