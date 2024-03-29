import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import LaptopLogo from "../images/redLaptop.png";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={LaptopLogo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="redContact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
