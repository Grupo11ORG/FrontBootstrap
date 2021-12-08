import React from "react";
import Navbar from "../components/Navbar";
/*import About from '../components/About';
import CalltoAction from '../components/CalltoAction';
import Contact from '../components/Contact';
import Masthead from '../components/Masthead';*/
import Footer from "../components/Footer";
/*import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import card from '../components/Card';*/

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Container;
