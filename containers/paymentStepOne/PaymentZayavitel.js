import React from 'react'
import styles from './paymentzayavitel.module.scss'
import { useRef } from 'react'
const PaymentZayavitel = ({click, clickTwo}) => {
    const ref = useRef()
    const handelClick = (e)=>{
        e.preventDefault()
        click()
    }
  return (
    <div className={styles.PaymentZayavitel_wrapper}>
        <div className={styles.holder}>
            <button onClick={()=> clickTwo()}>Назад</button>
            <h3>Заявитель</h3>
        </div>

        <div className={styles.zayavitel_forma}>
            <form action="" onSubmit={(e)=> handelClick(e)}>
                <div className={styles.form_one}>
                    <div className={styles.left_side}>
                        <label htmlFor="">Фамилия, имя и отчество</label>
                        <input placeholder='Напишите свою Фамилию, имя и отчество' type="text" name="" id="" />

                        <label htmlFor="">ПНФЛ</label>
                        <input placeholder='Напишите свою ПНФЛ' type="text" name="" id="" />
                        
                        <label htmlFor="">Место работы</label>
                        <input placeholder='Напишите где вы работаете' type="text" name="" id="" />
                    </div>
                    <div className={styles.right_side}>
                        <label htmlFor="">Серия и номер паспорта</label>
                        <input placeholder='Напишите серию и номер Вашего паспорта' type="text" name="" id="" />

                        <label htmlFor="">ИНН</label>
                        <input placeholder='Напишите свой ИНН' type="text" name="" id="" />
                        
                        <label htmlFor="">Должность</label>
                        <input placeholder='Напишите Вашу текущую должность' type="text" name="" id="" />
                    </div>
                </div>
                <h1>Контактные данные</h1>

                <div className={styles.form_two}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <label htmlFor="">Область</label>
                            <select name="" id="">
                                <option value="">Выберите свой область</option>
                            </select>
                        </div>
                        <div className={styles.right}>
                            <label htmlFor="">Район</label>
                            <select name="" id="">
                                <option value="">Выберите свой район</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <label htmlFor="">Адрес</label>
                        <input type="text" placeholder='Напишите название Вашего района, улицу и номер дома' name="" id="" />
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <label htmlFor="">Ваш номер телефона </label>
                            <div className={styles.phone_inp}>
                                <span>+998</span>
                                <input ref={ref} type="tel" id="myform_phone" name="phone"  placeholder="(_ _)   _ _ _   _ _   _ _"/>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <label htmlFor="">Район</label>
                            <input type="text" placeholder='Напишите свой электронный адрес почты' name="" id="" />
                        </div>
                    </div>

                </div>

                <button  type='submit' className={styles.next_btn}>Продолжить</button>
            </form>
        </div>
    </div>
  )
}

export default PaymentZayavitel 
