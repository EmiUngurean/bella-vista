import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__links}>
        <Link href="/">
          <a className={styles.container__title}>BellaVista</a>
        </Link>
        <Link href="/gallery">
          <a className={styles.container__buttons}> Gallery </a>
        </Link>
        <Link href="/about">
          <a className={styles.container__buttons}> About </a>
        </Link>
        <Link href="/book">
          <a className={styles.container__buttons}> Book </a>
        </Link>
      </div>
      <div className={styles.container__contact}>
        <span>Call: +40 740 616 195</span>
      </div>
    </div>
  );
};

export default Navbar;
