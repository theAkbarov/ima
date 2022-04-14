import React, { useEffect, useState } from "react";
import classes from "./service.module.scss";
import logo from "../../public/vercel.svg";
import Image from "next/image";

const Services = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push({
        text: "Обеспечение реализации единой государственной политики в области интеллектуальной собственности",
        title: "Программы для ЭВМ",
        logo,
      });
    }
    setCard(cards);
  }, []);

  return (
    <div className={classes.services}>
      <h2 className={classes.serviceTitle}>Услуги</h2>
      <div className={classes.wrapper}>
        {card.map((el, index) => (
          <div className={classes.card} key={index}>
            <span className={classes.imageHolder}>
              <Image src={el.logo} alt={el.title} />
            </span>
            <h3 className={classes.cardTitle}>{el.title} </h3>
            <p className={classes.cardText}>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
