import React, { useState } from "react";
import styles from "./application.module.scss";
import List from "../../components/listTable/List";
import InfoZayavka from "../infoZayavka/InfoZayavka";
import InfoZayavkaTwo from "../infoZayavkaTwo/InfoZayavkaTwo";

function Application() {
  const someArr = [1, 2, 3, 4];

  const [single, setSingle] = useState('one')

  return (
    <>
      {
          single  === 'one' ? (
            <div className={styles.Application_wrapper}>
            <div className={styles.holder}>
              <h1>Мои заявки</h1>
            </div>
            <div className={styles.status_tabbar}>
              <span>Тип объекта</span>
              <span>Дата</span>
              <span>Статус</span>
            </div>
    
            <div className={styles.list_place}>
              {someArr.map((el) => {
                return <List key={el} single={()=> setSingle('two')}/>;
              })}
            </div>
          </div>
          ): single === 'two' ? (
              <InfoZayavka payTwo={()=> setSingle('one')} pay={()=> setSingle('three')}/>
          ): single === 'three' ? (
            <InfoZayavkaTwo back={()=> setSingle('two')}/>
          ): null
      }
    </>
  );
}

export default Application;
