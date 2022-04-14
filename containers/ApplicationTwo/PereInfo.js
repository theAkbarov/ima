import React from 'react'
import styles from './pere.module.scss'
import Image from 'next/image'
import Image1 from '../../assets/images/Vector (3).png'
import Eye from '../../assets/images/EYE.png'

const PereInfo = ({replaceOn}) => {
  return (
    <div className={styles.payment_wrapper}>
        <div className={styles.holder_back}>
            <button onClick={()=>replaceOn()}>Назад</button>
            <h1>Информация о переписке</h1>
        </div>

        <div className={styles.informations}>
            <div className={styles.row}>
                <h3>Тип: </h3>
                <span>Входящий</span>
            </div>
            <div className={styles.row}>
                <h3>Объект:</h3>
                <span>Товарные знаки</span>
            </div>
            <div className={styles.row}>
                <h3>Дата создание:</h3>
                <span>16 Февраля 2021, 12:45</span>
            </div>
            <div className={styles.row}>
                <h3>Номер заявки:</h3>
                <span>123456789</span>
            </div>
            <div className={styles.row}>
                <h3>Описание:</h3>
                <span>Ответ на заявку</span>
            </div>
            <div className={styles.row}>
                <h3>Тип документа:</h3>
                <span>Доверенность</span>
            </div>
            <div className={styles.row}>
                <h3>Загруженный файл:</h3>
                <div className={styles.nimadir}>
                    <Image src={Image1}/>
                    <span>Название документа</span>
                    <div className={styles.image_fix}>
                        <Image src={Eye}/>
                    </div>
                </div>t
            </div>
            <div className={styles.row}>
                <h3>Cтатус:</h3>
                <span className={styles.other}>Ожидается платеж</span>
            </div>
        </div>
    </div>
  )
}

export default PereInfo
