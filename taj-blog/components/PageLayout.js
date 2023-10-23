import React from "react";
import Navbar from "./Navbar";

export default function PageLayout({ children, className }) {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className={`page-wrapper ${className}`}>{children}</div>
      <div className="footer">
        <div>
          <a className="link" href="https://facebook.com/">
            FACEBOOK
          </a>
        </div>
        &nbsp; | &nbsp;
        <div>
          <a className="link" href="https://instagram.com/">
            INSTAGRAM
          </a>
        </div>
        &nbsp; | &nbsp;
        <div>
          <a className="link" href="https://twitter.com/">
            TWITTER
          </a>
        </div>
      </div>
    </>
  );
}
