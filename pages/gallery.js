import React, { useState } from "react";
import styles from "../styles/Gallery.module.scss";
import Image from "next/image";
import { Rnd } from "react-rnd";

const Gallery = () => {
  const [currentImageSrc, setCurrentImageSrc] = useState("/1.jpg");

  const handleClick = (image) => {
    setCurrentImageSrc(image);
    console.log(currentImageSrc);
  };
  const images = [
    {
      id: 1,
      image: "/1.jpg",
    },
    {
      id: 2,
      image: "/2.jpg",
    },
    {
      id: 3,
      image: "/3.jpg",
    },
    {
      id: 4,
      image: "/4.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__tabs}>
        {images.map((item) => {
          return (
            <button
              key={item.id}
              className={styles.container__buttons}
              onClick={() => handleClick(item.image)}
            >
              <Image
                src={item.image}
                width={130}
                height={120}
                className={styles.container__tabs_images}
                alt="image"
              />
            </button>
          );
        })}
      </div>
      <div className={styles.container__content}>
        <Rnd
          default={{
            x: 500,
            y: 300,
            width: 130,
            height: 120,
          }}
        >
          <Image
            src={currentImageSrc}
            width={130}
            height={120}
            className={styles.container__tabs_images}
            alt="image"
          />
        </Rnd>
      </div>
    </div>
  );
};

export default Gallery;
