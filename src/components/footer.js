import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span style={{ fontSize: "14px" }}>
          Powered by{" "}
          <a
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            create-react-app
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
