import styles from './paymentDoc.module.scss'
import Uploder from '../../components/Uploder/Uploder'

const PaymentDoc = () => {
  return (
    <div className={styles.PaymentDoc_wrapper}>
        <div className={styles.holder}>
            <button onClick={()=> clickTwo()}>Назад</button>
            <h3>Документы</h3>
        </div>
        <div className={styles.update_file}>
            <h3>Файлы которые можно приложить к заявке!</h3>
            <div className={styles.drop_file_input}>
                <div className={styles.upload}>
                    <Uploder title={'Документ о квалификации'}/>
                </div>
                <div className={styles.upload}>
                    <Uploder title={'Другой'}/>
                </div>
            </div>
        </div>
    </div>
  )
}




export default PaymentDoc
