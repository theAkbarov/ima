import classes from "./Payment.module.scss";
import Select from "../../components/Select";
import Button from "../../components/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import payme from "../../assets/images/payme/Промышленны образцы/image 155.svg";
import click from "../../assets/images/payme/click/Промышленны образцы/image 157.svg";
import { BsDownload } from "react-icons/bs";
const Payment = () => {
  const faker = [
    {
      title: "Выберите услугу",
      item: [
        { text: "Выберите услугу" },
        { text: "Выберите свой область" },
        { text: "Выберите свой область" },
        { text: "Выберите свой область" },
        { text: "Выберите свой область" },
      ],
    },
  ];
  return (
    <div className={classes.payment_wrapper}>
      <div className={`${classes.service} ${classes.w50}`}>
        <h2 className={classes.title}>Оплата за услугу</h2>
        <div className={classes.mb35}>
          <Select
            width="100"
            object={faker}
            lang={false}
            label="Название услуги"
          />
        </div>
        <div className={classes.mb35}>
          <Select
            width="100"
            object={faker}
            lang={false}
            label="Название объекта"
          />
        </div>
        <div className={classes.mb35}>
          <Select
            width="100"
            object={faker}
            lang={false}
            label="Название услуги"
          />
        </div>
        <Button
          title={"Номер заявки"}
          disabled={true}
          type={"primary"}
          width="100"
        />
      </div>
      <div className={`${classes.payment_types}  ${classes.w50}`}>
        <h2 className={classes.title}>Способ оплаты</h2>
        <button className={classes.close_button}>
          <AiOutlineClose />
        </button>
        <div className={classes.cards}>
          <label htmlFor="payme" className={classes.item}>
            <input type="radio" name="payme" id="payme" />
            <Image src={payme} />
          </label>
          <label htmlFor="click" className={classes.item}>
            <input type="radio" name="click" id="click" />
            <Image src={click} />
          </label>
          <label htmlFor="payme" className={classes.item}>
            <input type="radio" name="payme" id="payme" />
            <Image src={payme} />
          </label>
          <label htmlFor="click" className={classes.item}>
            <input type="radio" name="click" id="click" />
            <Image src={click} />
          </label>
        </div>
        <Button
          center={true}
          type={"primary"}
          width={100}
          title="Оплатить 456 000 сум"
        />
        <div className={classes.center}>
          <p>Или</p>
        </div>
        <div className={classes.center}>
          <button className={classes.secondary}>
            <BsDownload />
            Скачать квитанцию
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
