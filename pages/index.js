import Head from "next/head";
import styles from "../styles/Home.module.scss";
import About from "./about";
import Link from "next/link";
import Services from "../comps/Services.component";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <picture>
          <img
            src="/assets/a.webp"
            className={styles.container__image}
            alt="BellaVista background"
          />
        </picture>
        <div className={styles.container__title}>
          <h1> Cabana BellaVista Voroneț</h1>
          <p className={styles.container__subtitle}>
            Locația perfectă pentru o relaxare inedită!
          </p>
          <br />
          <Link href="/book">
            <button className={styles.container__button}>Rezervă cabana</button>
          </Link>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Services />
      </div>
    </>
  );
}
