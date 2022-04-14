import React from 'react'
import styles from './zayavka.module.scss'
import Wow from '../../assets/images/wow.png'
import Image from 'next/image'
import Arrow from '../../assets/images/Arrow.png'
import Pdf from '../../assets/images/Vector (3).png'
import Eye from '../../assets/images/EYE.png'

const InfoZayavkaTwo = ({back}) => {
  return (
    <div className={styles.InfoZayavkaTwo_wrapper}>
        <div className={styles.top_hold}>
            <button onClick={()=> back()}>Назад</button>
            <h3>Информация о заявление</h3>
        </div>

        <div className={styles.rows}>
            <h3>Изображение:</h3>
            <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                width: '300px',
                height: '200px'
            }}>
                <Image src={Wow} width={300} height={200} objectFit="cover"/>
            </div>
          </div>
          <div className={styles.rows}>
            <h3>Название услуги: </h3>
            <span>Товарные знаки</span>
          </div>
          <div className={styles.rows}>
            <h3>Тип знака:</h3>
            <span>Изобразительный знак</span>
          </div>
          <div className={styles.rows}>
            <h3>Описание знака:</h3>
            <span>Тут будет текст с коротким описанием </span>
          </div>
          <div className={styles.rows}>
            <h3>Цветовое сочетание:</h3>
            <span>Тут будет текст с коротким описанием </span>
          </div>
          <div className={styles.rows}>
            <h3>Дата создание:</h3>
            <span>16 Февраля 2021, 12:45</span>
          </div>

            <div className={styles.rows}>
                <h3>Номер заявки:</h3>
                <span>123456789</span>
            </div>
            <div className={styles.rows}>
                <h3>Код отслеживание:</h3>
                <span>12345</span>
            </div>

          <div className={`${styles.rows} ${styles.active}`}>
            <h3>Cтатус:</h3>
            <span className={styles.other_span}>Ожидается платеж</span>
          </div>


        <div className={styles.holder}>
            <h3>Выбранные классы</h3>
        </div>

        <div className={styles.rows}>
            <h3>Класс</h3>
            <h3>Категория</h3>
        </div>

        <div className={styles.rows}>
            <h3>1</h3>
            <div className={styles.cate_btns}>
                <button>Агар-агар</button>
                <button>Азот</button>
                <button>Актиний</button>
                <button>Алкалоиды</button>
            </div>
            <div className={styles.collape_image}>
                <Image src={Arrow}/>
            </div>
        </div>
        <div className={`${styles.rows} ${styles.active}`}>
            <h3>1</h3>
            <div className={styles.cate_btns}>
                <button>Агар-агар</button>
                <button>Азот</button>
                <button>Актиний</button>
                <button>Алкалоиды</button>
                <button>Альгинаты для пищевой промышленности</button>
            </div>
            <div className={styles.collape_image}>
                <Image src={Arrow}/>
            </div>
        </div>



        <div className={styles.holder}>
        <h3>Прикрепленные документы</h3>
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



      <div className={styles.holder}>
        <h3>Автор</h3>
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
  )
}

export default InfoZayavkaTwo
