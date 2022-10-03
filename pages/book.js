import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import styles from "../styles/Home.module.scss";

const Book = () => {
  const [dates, setDates] = useState(null);
  const [dates1, setDates1] = useState(1);

  const handleClick = () => {
    console.log("search button");
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__bookingDates}>
        <Calendar
          value={dates}
          onChange={(e) => setDates(e.value)}
          selectionMode="range"
          readOnlyInput
          placeholder="Check available dates"
        ></Calendar>
        <InputNumber
          mode="decimal"
          showButtons
          inputClassName={styles.container__bookingDates__persons}
          min={1}
          max={18}
          value={dates1}
          onValueChange={(e) => {
            setDates1(e.value);
          }}
        />

        <Button
          icon="pi pi-search"
          iconPos="right"
          label="Search"
          className="p-button-info p-button-text"
          onClick={() => handleClick()}
        />
      </div>
      !
    </div>
  );
};

export default Book;
