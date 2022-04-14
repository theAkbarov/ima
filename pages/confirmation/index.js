import Layout from "../../containers/layout/Layout";
import styles from "./confirmation.module.scss";
import { useRouter } from "next/router";
import Word from '../../assets/images/pdf/word/Селекционные достижение/Vector.svg'
import Pdf from '../../assets/images/pdf/Селекционные достижение/Vector.svg'
import Glas from '../../assets/images/pdf/word/glass/Селекционные достижение/EYE.svg'
import Image from "next/image";
import { style } from "@mui/system";
import ModalBlock from "../../components/modal_block/modal";

function Confirmation() {

  let arr = [
    {
      title: "Информация о заявление",
      data: [
        {
          title: "Название услуги: ",
          description: "Селекционные достижение",
          id: 0,
          delete: "",
          
        },
        {
          title: "Вид селекционого достижение: ",
          description: "Название полезного моделя",
          id: 1,
          delete: "Изменить",
        },
        {
          title: "Название селекционного достижение: ",
          description: "Тут будет текст с коротким описанием ",
          id: 2,
          delete: "Изменить",
        },
        {
          title: "Название рода или вида: ",
          description: "Название рода или вида",
          id: 3,
          delete: "Изменить",
        },
        {
          title: "Адрес переписки: ",
          description: "Адрес переписки",
          id: 4,
          delete: "Изменить",
        },
      ],
    },
  ];

  let arr2 = [
    {
      title: "Информация о заявление",
      extra_title:'Вид файла',
      description:'Название документа',
      data: [
        {
          title: "Название услуги: ",
          description: "Тут будет текст название документа",
          id: 0,
          delete: "",
          icon: Pdf,
          text: 'Pdf',
          look:Glas
        },
        {
          title: "Вид селекционого достижение: ",
          description: "Тут будет текст название документа",
          id: 1,
          delete: "Изменить",
          icon: Word,
          text: 'Word',
          look:Glas
        },
        {
          title: "Название селекционного достижение: ",
          description: "Тут будет текст название документа ",
          id: 2,
          delete: "Изменить",
          icon: Word,
          text: 'Word',
          look:Glas
        },
        {
          title: "Название рода или вида: ",
          description: "Тут будет текст название документа",
          id: 3,
          delete: "Изменить",
          icon: Word,
          text: 'Word',
          look:Glas
        },
        {
          title: "Адрес переписки: ",
          description: "Тут будет текст название документа",
          id: 4,
          delete: "Изменить",
          icon: Word,
          text: 'Word',
          look:Glas
        },
      ],
    },
  ];

  let arr3 = [
    {
      title: "Автор",
      data: [
        {
          title: "Ф.И.О: ",
          description: "Раджабов Сахир Олимовичь",
          id: 0,
          delete: "Изменить",
          
        },
        {
          title: "Вид лица: ",
          description: "Физическое лицо",
          id: 1,
          delete: "Изменить",
        },
        {
          title: "Статус заявки: ",
          description: "Заявитель ",
          id: 2,
          delete: "Изменить",
        },
        {
          title: "Область: ",
          description: "Ташкентская область ",
          id: 3,
          delete: "Изменить",
        },
        {
          title: "Район: ",
          description: "Яшнабадский район",
          id: 4,
          delete: "Изменить",
        },
        {
          title: "Адрес: ",
          description: "ул. Паркентский, 17",
          id: 5,
          delete: "Изменить",
        },
        {
          title: "ID номер: ",
          description: "123456",
          id: 6,
          delete: "Изменить",
        },
        {
          title: "ПНФЛ:",
          description: "12345678910",
          id: 7,
          delete: "Изменить",
        },
        {
          title: "Код страны: ",
          description: "Uz (Узбекистан)",
          id: 8,
          delete: "Изменить",
        },
        {
          title: "Номер телефона: ",
          description: "+998 (97) 765 59 54",
          id: 9,
          delete: "Изменить",
        },
      ],
    },
  ];

  const router = useRouter();

  return (
    <>
      <h1 className={styles.utilityModel_title}>Полезные модели</h1>
      <div className={styles.utilityModel_block}>
        <div className="utilityModel_block_inner">
          <div className={styles.utilityModel_block_inner_top}>
            <a href="/priority" className={styles.utilityModel_top_link}>
              Назад
            </a>
            <h2 className={styles.utilityModel_top_text}>Заявитель</h2>
            <div></div>
          </div>
          <div className={styles.confirmation_block}>
            <div className={styles.confirmation_block_inner}>
              {arr.map((el) => (
                <>
                  <h5 className={styles.confirmation_block_inner_tittle}>
                    {el.title}
                  </h5>
                  {el.data.map((item) => (
                    <div
                      id={item.id}
                      className={styles.confirmation_block_inner_box}
                    >
                      <div className={styles.confirmation_block_inner_box_div}>
                        <h6 className={styles.confirmation_block_inner_tit}>
                          {item.title}
                        </h6>
                      </div>
                      <div>
                        <p
                          className={
                            styles.confirmation_block_inner_description
                          }
                        >
                          {item.description}
                        </p>
                      </div>
                      <div className={styles.noDIv}></div>
                      <div>
                        <button
                          className={styles.confirmation_block_inner_delete}
                        >
                          {item.delete}
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ))}
            </div>


            
            <div className={styles.confirmation_block_inner}>
              {arr2.map((el) => (
                <>
                  <h5 className={styles.confirmation_block_inner_tittle}>
                    {el.title}
                  </h5>
                  <div className={styles.confirmation_block_inner_first_div}>
                    <h6 className={styles.confirmation_block_inner_first_div_title}>{el.extra_title}</h6>
                    <h6 className={styles.confirmation_block_inner_first_div_title}>{el.description}</h6>
                    <div></div>
                    <div></div>
                  </div>
                  {el.data.map((item) => (
                    <div
                      id={item.id}
                      className={styles.confirmation_block_inner_box}
                    >
                      <div className={styles.confirmation_block_inner_box_div}>
                        <Image className={styles.confirmation_block_inner_icon}  src={item.icon}/>
                        <h6 className={`${styles.confirmation_block_inner_tit} ${styles.confirmation_block_inner_tite}`}>
                          {item.text}
                        </h6>
                      </div>
                      <div>
                        <p
                          className={
                            styles.confirmation_block_inner_description
                          }
                        >
                          {item.description}
                        </p>
                      </div>
                      <div className={styles.noDIv}></div>
                      <div>
                        <button
                          className={styles.confirmation_block_inner_delete}
                        >
                          <Image src={item.look}/>
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ))}
            </div>

             <div className={styles.confirmation_block_inner}>
              {arr3.map((el) => (
                <>
                  <h5 className={styles.confirmation_block_inner_tittle}>
                    {el.title}
                  </h5>
                  {el.data.map((item) => (
                    <div
                      id={item.id}
                      className={styles.confirmation_block_inner_box}
                    >
                      <div className={styles.confirmation_block_inner_box_div}>
                        <h6 className={styles.confirmation_block_inner_tit}>
                          {item.title}
                        </h6>
                      </div>
                      <div>
                        <p
                          className={
                            styles.confirmation_block_inner_description
                          }
                        >
                          {item.description}
                        </p>
                      </div>
                      <div className={styles.noDIv}></div>
                      <div>
                        <button
                          className={styles.confirmation_block_inner_delete}
                        >
                          {item.delete}
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ))}
            </div>

          <ModalBlock
              title={'Обратите внимание!'}
              type={'После подтверждение заявки Вы проходите этап оплаты заявки, чтобы внести изменение и дополнений к заявке Вам нужно будет воспользоваться отдельной платной услугой. Поэтому внимательно изучите Вашу заявку и подтвердите.'}
          />

            <div className={styles.payments_link_block}>
              <a href="/payments" className={styles.payments_link_payment} onClick={() =>  router.push("/payments")}>
              
                Подтвердить заявку
                
              </a>
              <a href="" className={styles.downloads_payments_check}>
                Скачать заявление pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Confirmation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Confirmation;
