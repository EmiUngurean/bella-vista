import React from "react";
import styles from "../styles/About.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const About = () => {
  const currentUrl = useRouter();
  const data = [
    {
      id: 1,
      smallTitle: " Bine ați venit la BellaVista Voroneț!",
      title: "Cea mai îndrăgită cabană de tip A din Bucovina!",
      description:
        "Mai mult decât un loc în care vii să te relaxezi și să te bucuri de natură. Cabana BellaVista, un loc în care se scriu amintiri.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__photos}>
        <picture>
          <img
            src="/assets/about.png"
            alt="bellavista-image2"
            className={styles.container__picture1}
          />
        </picture>
      </div>
      {data.map((item) => {
        return (
          <div className={styles.container__content} key={item.id}>
            <div className={styles.container__content__text}>
              <span className={styles.container__content__title}>
                {item.smallTitle}
              </span>
              <h1>{item.title}</h1>
              <p className={styles.container__content__description}>
                {item.description}
              </p>
              {currentUrl.pathname === "/" && (
                <Link href="/about">
                  <button className={styles.container__content__button}>
                    Mai multe detalii...
                  </button>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
