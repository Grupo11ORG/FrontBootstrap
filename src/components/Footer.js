import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-light py-5"
      style={{ position: "absolute", bottom: "-100%vh", width: "100%" }}
    >
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">
          Copyright &copy; 2021 - Company Name
        </div>
      </div>
    </footer>
  );
};

export default Footer;
