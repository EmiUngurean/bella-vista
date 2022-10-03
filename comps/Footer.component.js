import Link from "next/link";
import { Button } from "primereact/button";
import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__box}>
        <div className={styles.footer__bigBox}>
          <p>Email: bellavista@gmail.com</p>
          <p>Phone: +40740616195</p>
        </div>

        <div className={styles.footer__smallBox}>
          <Link href={"https://www.facebook.com/bellavista.voronet"}>
            <i
              className="pi pi-facebook"
              style={{ fontSize: "2em", margin: "50px", cursor: "pointer" }}
            ></i>
          </Link>
          <Link href={"https://www.instagram.com/bellavista.voronet/"}>
            <i
              className="pi pi-instagram "
              style={{ fontSize: "2em", margin: "50px", cursor: "pointer" }}
            ></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
