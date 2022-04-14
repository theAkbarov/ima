import React from 'react'
import styles from './infouser.module.scss'
import Image from 'next/image'
import Man from '../../assets/images/splash.png'

function InfoUser() {
  return (
    <div className={styles.page_wrapper}>

        <h1 className={styles.big_holder}>Мои данные</h1>

        <div className={styles.holdet}>
            <h1>Общие данные</h1>
        </div>
        <div className={`${styles.personal_info} ${styles.active}`}>
            <div className={styles.left}>
            <div className={styles.rows}>
              <h3>Login:</h3>
              <span>Saxir</span>
            </div>
            <div className={styles.rows}>
              <h3>E-mail:</h3>
              <span>saxir.radjabov@mail.ru</span>
            </div>
            <div className={styles.rows}>
              <h3>Ф.И.О.:</h3>
              <span>Раджабов Сахир Олимовичь</span>
            </div>
            <div className={styles.rows}>
              <h3>Дата рождение: </h3>
              <span>10.01.1995</span>
            </div>
            <div className={styles.rows}>
              <h3>Номер телефона:</h3>
              <span>+998 (97) 765 59 54</span>
            </div>
            </div>
            <div className={styles.right}>
              <Image src={Man}/>
            </div>
        </div>

        <div className={styles.holdet}>
            <h1>Паспортные данные</h1>
        </div>
        <div className={styles.personal_info}>
            <div className={styles.rows}>
              <h3>ПНФЛ:</h3>
              <span>123456789101112</span>
            </div>
            <div className={styles.rows}>
              <h3>Дата выдачи:</h3>
              <span>16 Февраля, 2021 </span>
            </div>
            <div className={styles.rows}>
              <h3>Дата истечение срока:</h3>
              <span>16 Февраля, 2031 </span>
            </div>
            <div className={styles.rows}>
              <h3>Кем выдан:</h3>
              <span>Самарканд ГОВД, Самаркандский область</span>
            </div>
            <div className={styles.rows}>
              <h3>Серия паспорта:</h3>
              <span>AB12345678</span>
            </div>
        </div>



        <div className={styles.holdet}>
            <h1>Адрес постоянный прописки</h1>
        </div>
        <div className={styles.personal_info}>
            <div className={styles.rows}>
              <h3>Страна:</h3>
              <span>Узбекистан</span>
            </div>
            <div className={styles.rows}>
              <h3>Регион:</h3>
              <span>Самарканд</span>
            </div>
            <div className={styles.rows}>
              <h3>Район:</h3>
              <span>Город Самарканд</span>
            </div>
            <div className={styles.rows}>
              <h3>Адрес:</h3>
              <span>Ул. Фархадская, дом 59</span>
            </div>
        </div>
    </div>
  )
}

export default InfoUser
