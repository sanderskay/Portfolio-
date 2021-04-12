import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/services">
              {" "}
              <h2>About</h2>{" "}
            </Link>
          </div>
          <div class="footer-link-items">
            <Link to="/contact">
              {" "}
              <h2>Contact</h2>
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>

            <a href="https://github.com/sanderskay" target="_blank">
              GitHub
            </a>
            {/*<Link to="/">LinkedIn</Link>*/}
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              JULIAN SANDERS-KAY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
