import classes from "./Payment.module.scss";
import Select from "../../components/Select";
import Button from "../../components/Button/Button";
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
      </div>
    </div>
  );
};

export default Payment;
