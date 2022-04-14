import styles from "./paymentline.module.scss";
import Layout from "../../containers/layout/Layout";
import React from "react";
import PaymentZayavitel from "../../containers/paymentStepOne/PaymentZayavitel";
import PaymentDoc from "../../containers/paymentDoc/PaymentDoc";

const PaymentLine = () => {
  return (
    <div className={styles.payment_line_wrapper}>
        <div className={styles.payment_steps_containers}>
            <PaymentDoc/>
        </div>
    </div>
  );
};

export default PaymentLine;

PaymentLine.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
