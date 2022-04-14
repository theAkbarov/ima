import React from 'react'
import styles from './kabinet.module.scss'
import Layout from '../../containers/layout/Layout';
import Application from '../../containers/Application/Application';
import ApplicationTwo from '../../containers/ApplicationTwo/ApplicationTwo';
import ApplicationThree from '../../containers/ApplicationThree/ApplicationThree';
import Modal from '../../components/Modal/Modal';
import InfoUser from '../../containers/infoUser/infoUser';
import { useState } from 'react';
import Vector from '../../assets/images/Vector.png'
import Image from 'next/image';
const Kabinet = () => {

  const [showModal, setShowModal] = useState(false)
  const [change, setChange] = useState('one')

    const someFoo = ()=>{
    }

  return (
    <div className={styles.Kabinet_wrapper}>
        <div className={styles.Kabinet_holder}>
            <h1>Личный кабинет</h1>
        </div>

        <div className={styles.Kabinet_tabbar_wrapper}>
            <div className={styles.Kabinet_tabs}>
                <div className={styles.Kabinet_tabs_inner}>
                    <ul className={styles.Kabinet_tabs_inner_ul}>
                        <li className={styles.Kabinet_tabs_inner_li}>
                            <button onClick={() => {setChange('one')}}className={`${styles.Kabinet_tabs_inner_button} ${change === 'one' ? styles.active : null}`}>Мои заявки</button>
                            <span className={styles.Kabinet_tabs_inner_span}>0</span>
                        </li>
                        <li className={styles.Kabinet_tabs_inner_li}>
                            <button onClick={() => setChange('two')} className={`${styles.Kabinet_tabs_inner_button} ${change === 'two' ? styles.active : null}`}>Переписки</button>
                            <span className={styles.Kabinet_tabs_inner_span}>2</span>
                        </li>

                        <li className={styles.Kabinet_tabs_inner_li}>
                            <button onClick={() => setChange('thre')} className={`${styles.Kabinet_tabs_inner_button} ${change === 'thre' ? styles.active : null}`}>История оплаты</button>
                            <span className={styles.Kabinet_tabs_inner_span}>0</span>
                        </li>
                        <li className={styles.Kabinet_tabs_inner_li}>
                            <button onClick={() => setChange('four')} className={`${styles.Kabinet_tabs_inner_button} ${change === 'four' ? styles.active : null}`}>Мои данные</button>
                            <span className={styles.Kabinet_tabs_inner_span}>0</span>
                        </li>

                        <li className={styles.Kabinet_tabs_inner_li}>
                            <button onClick={()=>setShowModal(true)} className={styles.Kabinet_tabs_inner_button}>Выйти </button>
                        </li>
                    </ul>
                </div>
                <div className={styles.changing_tabs_container}>
                    {
                        change === 'one' ? <Application
                            change={change}
                        /> : 
                        change === 'two' ? <ApplicationTwo/> : 
                        change === 'thre' ? <ApplicationThree/> :
                        change === 'four' ? <InfoUser/> : null
                    }
                </div>
            </div>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
            <div className={styles.exit_confirm}>
                <button className={styles.close_btn} onClick={()=> setShowModal(false)}><Image src={Vector}/></button>
                <h3>Вы действительно <br/> хотите выйти из системы?</h3>
                <div className={styles.buttons}>
                    <button className={styles.active}>Нет, не выйти</button>
                    <button>Да, выйти</button>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default Kabinet

Kabinet.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
