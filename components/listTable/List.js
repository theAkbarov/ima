import React from 'react'
import styles from './list.module.scss'

function List({single}) {
  return (
    <div className={styles.list_wrapper}>
        <div className={styles.list_item}>
            <span>Товарные знаки</span>
        </div>
        <div className={styles.list_item}>
            <span>16 Февраля  2021, 12:45</span>
        </div>
        <div className={styles.list_item}>
            <span >Формальная  экспертиза </span>
        </div>
        <div className={styles.list_item}>
            <button onClick={()=> single()}>Подробнее</button>
        </div>
    </div>

)
}

export default List
