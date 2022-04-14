import React from 'react'
import styles from './listThree.module.scss'

function ListTwo({replaceOn}) {
  return (
    <div className={styles.list_wrapper}>
        <div className={styles.list_item}>
            <span>16 Февраля 2021, 12:45</span>
        </div>
        
        <div className={styles.list_item}>
            <span>456 000 сум</span>
        </div>
        <div className={styles.list_item}>
            <span>12345678910111</span>
        </div>
        <div className={styles.list_item}>
            <button onClick={() => replaceOn()}>Подробнее</button>
        </div>
    </div>

)
}

export default ListTwo
