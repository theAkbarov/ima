import React from 'react'
import styles from './payment.module.scss'

const Payment = ({replaceOff}) => {
  return (
    <div className={styles.payment_wrapper}>
        <div className={styles.holder_back}>
            <button onClick={()=>replaceOff()}>Назад</button>
            <h1>Информация о оплате</h1>
        </div>

        <div className={styles.informations}>
            <div className={styles.row}>
                <h3>Дата оплаты:</h3>
                <span>16 Февраля 2021, 12:45</span>
            </div>
            <div className={styles.row}>
                <h3>Сумма оплаты:</h3>
                <span>456 000 сум</span>
            </div>
            <div className={styles.row}>
                <h3>Получатель:</h3>
                <span>Казначейство Министерства Финансов Республики Узбекистан</span>
            </div>
            <div className={styles.row}>
                <h3>Приниматель:</h3>
                <span>г. Ташкент, головной офис МБ, XKKM</span>
            </div>
            <div className={styles.row}>
                <h3>STIR:</h3>
                <span>123456789</span>
            </div>
            <div className={styles.row}>
                <h3>MFO:</h3>
                <span>12345</span>
            </div>
            <div className={styles.row}>
                <h3>Инвойс:</h3>
                <span>12345678910111</span>
            </div>
            <div className={styles.row}>
                <h3>Cрок инвойса:</h3>
                <span>16 Февраля 2021, 12:45</span>
            </div>
        </div>
        <button className={styles.download_btn}>Скачать квитанцию</button>
    </div>
  )
}

export default Payment
