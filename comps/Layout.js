import React from "react";
import Footer from "./Footer.component";
import Navbar from "./Navbar.component";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
