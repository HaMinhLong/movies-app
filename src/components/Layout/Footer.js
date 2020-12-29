import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Questions? Contact us.</p>
      <div className="card-list">
        <div className="card">
          <Link to="/">FAQ</Link>
          <Link to="/">Investor Relations</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Speed Test</Link>
        </div>
        <div className="card">
          <Link to="/">Help Center</Link>
          <Link to="/">Jobs</Link>
          <Link to="/">Cookie Preferences</Link>
          <Link to="/">Legal Notices</Link>
        </div>
        <div className="card">
          <Link to="/">Account</Link>
          <Link to="/">Ways to Watch</Link>
          <Link to="/">Corporate Information</Link>
          <Link to="/">Movies Original</Link>
        </div>
        <div className="card">
          <Link to="/">Media Center</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </div>
      <p>Copyright &copy; 2020</p>
    </footer>
  );
};

export default Footer;
