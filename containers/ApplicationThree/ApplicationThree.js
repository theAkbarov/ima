import React from "react";
import styles from "./applicationThree.module.scss";
import ListThree from "../../components/listTablethree/ListThree";
import Payment from "./Payment";
import { useState } from 'react';

function ApplicationThree() {
  const someArr = [1, 2, 3, 4];
  const [payInfo, setPayInfo] = useState(true);
  console.log(payInfo);


  return (
    <div className={styles.Application_wrapper}>
      {payInfo ? (
        <div className={styles.inner}>
          <div className={styles.holder}>
            <h1>История оплаты</h1>
          </div>
          <div className={styles.status_tabbar}>
            <span>Дата оплаты</span>
            <span>Сумма</span>
            <span>Инвойс </span>
          </div>

          <div className={styles.list_place}>
            {someArr.map((el) => {
              return <ListThree key={el}  replaceOn={()=>setPayInfo(false)}/>;
            })}
          </div>
        </div>
      ) : (
        <Payment replaceOff={()=>setPayInfo(true)}/>
      )}
    </div>
  );
}

export default ApplicationThree;
