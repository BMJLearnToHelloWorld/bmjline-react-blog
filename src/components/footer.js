import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span style={{ fontSize: "14px" }}>
          @Pasteright 2021{" "}
          <a
            href="https://github.com/BMJLearnToHelloWorld"
            target="_blank"
            rel="noopener noreferrer"
          >
            BMJ
          </a>
        </span>
        <span>&nbsp;&nbsp;</span>
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
