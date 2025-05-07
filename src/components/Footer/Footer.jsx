import React from 'react';
// import { Link } from 'react-router';
import './Footer.css'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <span className="footer-note">© {new Date().getFullYear()} HAKAYA. All rights reserved.</span>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
