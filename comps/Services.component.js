import { Image } from "primereact/image";
import React from "react";
import styles from "../styles/Services.module.scss";

const Services = () => {
  const data = [
    {
      id: 1,
      image: "/assets/sauna.jpg",
      title: "Saună",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
    {
      id: 2,
      image: "/assets/6.jpg",
      title: "Ciubăr",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: "/assets/spatiu-copii.jpg",
      title: "Spațiu pentru copii",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 4,
      image: "/assets/foisor.jpg",
      title: "Foișor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
    },
    {
      id: 5,
      image: "/assets/leagan.jpg",
      title: "Leagăn de poveste",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
    },
    {
      id: 6,
      image: "/assets/semineu.jpg",
      title: "Șemineu",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.? ",
    },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.container__small}>Serviciile Noastre</span>
      <h1 className={styles.container__title}>Ce vei găsi la noi?</h1>
      <div className={styles.container__content__style}>
        {data.map((item) => (
          <div className={styles.container__content} key={item.id}>
            <div className={styles.container__content__icon}>
              <div className={styles.container__content__icon__design}>
                <Image
                  className="hey"
                  src={item.image}
                  imageClassName={
                    styles.container__content__icon__design__photo
                  }
                  preview
                  alt="photos"
                />
              </div>
            </div>
            <div className={styles.container__content__description}>
              <h1>{item.title}</h1>
              <span className={styles.container__content__description__desc}>
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <video
          className={styles.container__video}
          src="/video.mp4"
          alt="1"
          controls
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Services;
