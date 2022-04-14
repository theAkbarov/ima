import Image from "next/image";
import styles from "./modal.module.scss";

import Vajna from '../../assets/images/vajna/Селекционные достижение/Vector.svg'
import CloseModal from '../../assets/images/vajna/close/Селекционные достижение/Vector.svg'
const ModalBlock = ({ title, type }) => {
  return (
       <div className={styles.Confirmation_modal}>
              <div className={styles.confirmation_modal_left}></div>
              <div className={styles.confirmation_icon_block}>
                <Image src={Vajna} className={styles.confirmation_modal_icon}/>
              </div>
              <h6 className={styles.confirmation_modal_title}>{title}</h6>
              <p className={styles.confirmation_modal_description}>{type}</p>
              <button className={styles.confirmation_modal_close}>
                <Image src={CloseModal} className={styles.confirmation_close_icon}/>
              </button>
            </div> 
          
  );
};

export default ModalBlock;
