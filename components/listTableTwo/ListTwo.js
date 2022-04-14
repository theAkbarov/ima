import React from 'react'
import styles from './listTwo.module.scss'

function ListTwo({replaceOff}) {
  return (
    <div className={styles.list_wrapper}>
        <div className={styles.list_item}>
            <svg className={styles.icon} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.17102 1.25382e-06L6.44058 0.731698L12.0348 6.00212L-1.04944e-06 6.00211L-1.23317e-06 7.0529L11.971 7.0529L6.49275 12.3288L7.17101 13L14 6.51375L7.17102 1.25382e-06Z" fill="#0065DD"/>
            </svg>
            <span>Товарные знаки</span>
        </div>
        
        <div className={styles.list_item}>
            <span>Изобретение</span>
        </div>
        <div className={styles.list_item}>
            <span>16 Февраля  2021, 12:45</span>
        </div>
        <div className={styles.list_item}>
            <button onClick={()=> replaceOff()}>Подробнее</button>
        </div>
    </div>

)
}

export default ListTwo
