import React from "react";
import styles from "./applicationTwo.module.scss";
import ListTwo from "../../components/listTableTwo/ListTwo";
import { useState } from "react";
import PereInfo from "./PereInfo";
import Modal from "../../components/Modal/Modal";
import Vector from '../../assets/images/Vector.png'
import Image from "next/image";
import Uploder from "../../components/Uploder/Uploder";

function ApplicationTwo() {
  const someArr = [1, 2, 3, 4];
  const [pereInfo, setPereInfo] = useState(true);
  const [show, setShow] = useState(false)

  return (
    <div className={styles.Application_wrapper}>
      {pereInfo ? (
        <div className={styles.inner}>
          <div className={styles.holder}>
            <h1>Переписки</h1>
            <button onClick={()=> setShow(true)} className={styles.btn}>Создать переписку</button>
          </div>
          <div className={styles.status_tabbar}>
            <span>Тип</span>
            <span>Объект</span>
            <span>Дата </span>
          </div>

          <div className={styles.list_place}>
            {someArr.map((el) => {
              return <ListTwo key={el} replaceOff={()=> setPereInfo(false)}/>;
            })}
          </div>
        </div>
      ) : (
        <PereInfo replaceOn={()=> setPereInfo(true)}/>
      )}

<Modal show={show} onClose={()=> setShow(false)}>
        <div className={styles.exit_confirm}>
                <button className={styles.close_btn} onClick={()=> setShow(false)}><Image src={Vector}/></button>
                <h3>Создать переписку</h3>
                <form action="">
                  <label htmlFor="">Описание переписки</label>
                  <textarea placeholder="Напишите описание переписки" name="" id="" cols="30" rows="5"></textarea>
                  <Uploder/>
                  <button>Создать переписку</button>
                </form>
            </div>
    </Modal>
    </div>
    
  );
}

export default ApplicationTwo;
