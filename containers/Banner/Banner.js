import Button from "../../components/Button/Button";
import classes from "./Banner.module.scss";
const Banner = () => {
  return (
    <div className={classes.banner}>
      <h3 className={classes.bannerTitle}>Добро пожаловать</h3>
      <h1 className={classes.bannerText}>
        Портал Электронных Государственных Услуг Агенство Интеллектуальной
        Собственности
      </h1>
      <Button title={"Выбрать услугу"} type="primary" />
    </div>
  );
};

export default Banner;
