import classes from "./calculator.module.scss";
import Slider from "@mui/material/Slider";
import IosSwitch from "../../components/IosSwitch";
const Calculator = () => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Калкулятор пошлин</h2>
      <div className={classes.content}>
        <div className={`${classes.col} ${classes.buttons}`}>
          <button>Для подачи заявки</button>
          <button>Для регистрации, публикации и сертификации</button>
          <button>Для поддержания действия сертификатов</button>
          <button>Расчет патентной пошлины</button>
          <button>
            Продлить и возобновить срок подачи документов по запросу о
            проведении экспертизы
          </button>
        </div>
        <div className={`${classes.col} ${classes.slider} `}>
          <h2 className={classes.subtitle}>Для подачи заявки</h2>
          <p className={classes.text}>
            Подача заявок на регистрацию товарного знака, знака обслуживания и
            проведение государственной экспертизы знака, указанного в заявке
          </p>
          <div className={classes.slide}>
            <div className={`${classes.row} ${classes.dFlex}`}>
              <h3>Колличество МКТУ</h3>
              <b>5</b>
            </div>
            <div>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                // getAriaValueText={valuetext}
                color="primary"
              />
            </div>
            <div className={classes.dFlex}>
              <p className={classes.text_muted}>0</p>
              <p className={classes.text_muted}>25</p>
              <p className={classes.text_muted}>35</p>
              <p className={classes.text_muted}>45</p>
            </div>
          </div>
          <div className={classes.dFlex}>
            <IosSwitch
              classes={classes}
              label={"Для граждан и жителей Республики Узбекистан"}
            />
          </div>
        </div>
        <div className={`${classes.col} ${classes.display}`}>
          <p>Cтоимость</p>
          <h3>945 000 сум</h3>
          <p>В месяц</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
