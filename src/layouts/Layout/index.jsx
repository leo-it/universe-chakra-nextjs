import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
