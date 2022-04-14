import React from "react";
import styles from "./info_zayavka.module.scss";
import Image from "next/image";

import Eye from '../../assets/images/EYE.png'
import Pdf from '../../assets/images/Vector (3).png'

const InfoZayavka = ({pay, payTwo}) => {
  return (
    <div className={styles.container_wrapper}>
      <div className={styles.holdet}>
        <button onClick={()=>payTwo()}  className={styles.back}>Назад</button>
        <h1>Информация о заявление</h1>
      </div>
      <div className={`${styles.personal_info} ${styles.active}`}>
        <div className={styles.left}>
          <div className={styles.rows}>
            <h3>Название услуги:</h3>
            <span>Изобретение</span>
          </div>
          <div className={styles.rows}>
            <h3>Название изобретение:</h3>
            <span>Название изобретение</span>
          </div>
          <div className={styles.rows}>
            <h3>Адрес переписки:</h3>
            <span>Тут будет текст с коротким описанием </span>
          </div>
          <div className={styles.rows}>
            <h3>Дата создание:</h3>
            <span>16 Февраля 2021, 12:45</span>
          </div>
          <div className={styles.rows}>
            <h3>Номер заявки:</h3>
            <span>123456778</span>
          </div>
          <div className={styles.rows}>
            <h3>Код отслеживание:</h3>
            <span>1234</span>
          </div>
          <div className={styles.rows}>
            <h3>Cтатус:</h3>
           <div className={styles.nimadir_do}>
            <span className={styles.other_span}>Ожидается платеж</span>
            <button onClick={()=> pay()} className={styles.other_btn}>Оплатить</button>
           </div>
          </div>
        </div>
      </div>

      <div className={styles.holdet}>
        <h1>Прикрепленные документы</h1>
      </div>
      <div className={styles.personal_info}>
        <div className={styles.rows}>
          <h3>Вид файла</h3>
          <h3>Название документа</h3>
        </div>

        <div className={styles.rows}>
          <div className={styles.image}><Image src={Pdf}/></div>
          <div className={styles.doc_image}>
            <span>Тут будет текст название документа</span>  
            <button>
                <Image src={Eye}/>
            </button>
          </div>
        </div>

        <div className={styles.rows}>
        <div className={styles.image}><Image src={Pdf}/></div>
          <div className={styles.doc_image}>
            <span>Тут будет текст название документа</span>  
            <button>
                <Image src={Eye}/>
            </button>
          </div>
        </div>

        <div className={styles.rows}>
        <div className={styles.image}><Image src={Pdf}/></div>
          <div className={styles.doc_image}>
            <span>Тут будет текст название документа</span>  
            <button>
                <Image src={Eye}/>
            </button>
          </div>
        </div>

        <div className={styles.rows}>
        <div className={styles.image}><Image src={Pdf}/></div>
          <div className={styles.doc_image}>
            <span>Тут будет текст название документа</span>  
            <button>
                <Image src={Eye}/>
            </button>
          </div>
        </div>
        
      </div>
      <div className={styles.holdet}>
        <h1>Правообладатель</h1>
      </div>
      <div className={styles.personal_info}>
        <div className={styles.rows}>
          <h3>Ф.И.О:</h3>
          <span>Раджабов Сахир Олимовичь</span>
        </div>
        <div className={styles.rows}>
          <h3>Вид лица:</h3>
          <span>Физическое лицо</span>
        </div>
        <div className={styles.rows}>
          <h3>Статус заявки:</h3>
          <span>Заявитель</span>
        </div>
        <div className={styles.rows}>
          <h3>Область:</h3>
          <span>Ташкентская область </span>
        </div>
        <div className={styles.rows}>
            <h3>Район:</h3>
            <span>Яшнабадский район</span>
        </div>
        <div className={styles.rows}>
            <h3>Адрес:</h3>
            <span>ул. Паркентский, 17</span>
        </div>
        <div className={styles.rows}>
            <h3>ID номер:</h3>
            <span>123456</span>
        </div>
        <div className={styles.rows}>
            <h3>ПНФЛ:</h3>
            <span>12345678910</span>
        </div>
        <div className={styles.rows}>
            <h3>Код страны:</h3>
            <span>Uz (Узбекистан)</span>
        </div>
        <div className={styles.rows}>
            <h3>Номер телефона:</h3>
            <span>+998 (97) 765 59 54</span>
        </div>
      </div>




      <div className={styles.holdet}>
        <h1>Автор</h1>
      </div>
      <div className={styles.personal_info}>
        <div className={styles.rows}>
          <h3>Ф.И.О:</h3>
          <span>Раджабов Сахир Олимовичь</span>
        </div>
        <div className={styles.rows}>
          <h3>Вид лица:</h3>
          <span>Физическое лицо</span>
        </div>
        <div className={styles.rows}>
          <h3>Статус заявки:</h3>
          <span>Заявитель</span>
        </div>
        <div className={styles.rows}>
          <h3>Область:</h3>
          <span>Ташкентская область </span>
        </div>
        <div className={styles.rows}>
            <h3>Район:</h3>
            <span>Яшнабадский район</span>
        </div>
        <div className={styles.rows}>
            <h3>Адрес:</h3>
            <span>ул. Паркентский, 17</span>
        </div>
        <div className={styles.rows}>
            <h3>ID номер:</h3>
            <span>123456</span>
        </div>
        <div className={styles.rows}>
            <h3>ПНФЛ:</h3>
            <span>12345678910</span>
        </div>
        <div className={styles.rows}>
            <h3>Код страны:</h3>
            <span>Uz (Узбекистан)</span>
        </div>
        <div className={styles.rows}>
            <h3>Номер телефона:</h3>
            <span>+998 (97) 765 59 54</span>
        </div>

        <button className={styles.download_pdf}>Скачать заявку в PDF</button>
      </div>
    </div>
  );
};

export default InfoZayavka;
