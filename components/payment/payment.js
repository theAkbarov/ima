import Image from "next/image";
import classes from "./payment.module.scss";
import Payme from '../../assets/images/payme/Промышленны образцы/image 155.svg'
import Click from '../../assets/images/payme/click/Промышленны образцы/image 157.svg'
import Upay from '../../assets/images/payme/upay/Промышленны образцы/image 161.svg'
const Payment = ({ }) => {
  return (
    <div className={classes.payment_block}>
      <div className={classes.payment_block_inner}>
        <input type="radio" id="payment_payme" className={classes.payment_block_input} />
        <label htmlFor="payment_payme" className={classes.payment_block_input_label}>
          <Image src={Payme} alt="" className={classes.payment_block_input_label_left} />
          <div className={classes.payment_block_input_label_right}>
            <h6 className={classes.payment_block_input_label_title}>Payme</h6>
            <p className={classes.payment_block_input_label_description}>Платежная система </p>
          </div>
        </label>
      </div>

       <div className={classes.payment_block_inner}>
        <input type="radio" id="payment_click" className={classes.payment_block_input} />
        <label htmlFor="payment_click" className={classes.payment_block_input_label}>
          <Image src={Click} alt="" className={classes.payment_block_input_label_left} />
          <div className={classes.payment_block_input_label_right}>
            <h6 className={classes.payment_block_input_label_title}>Click</h6>
            <p className={classes.payment_block_input_label_description}>Платежная система </p>
          </div>
        </label>
      </div>

       <div className={classes.payment_block_inner}>
        <input type="radio" id="payment_upay" className={classes.payment_block_input} />
        <label htmlFor="payment_upay" className={classes.payment_block_input_label}>
          <Image src={Upay} alt="" className={classes.payment_block_input_label_left} />
          <div className={classes.payment_block_input_label_right}>
            <h6 className={classes.payment_block_input_label_title}>Upay</h6>
            <p className={classes.payment_block_input_label_description}>Мобильный кошелек </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Payment;
