import Layout from "../../containers/layout/Layout";
import styles from "./priority.module.scss";
import Payment from "../../components/payment/payment";
import Inputs from "../../components/Inputs/Inputs";
import Select from "../../components/Select/Select";
import ModalBlock from "../../components/modal_block/modal";
import { useRouter } from "next/router";
function Priority() {

  let arr = [
    {
      title: "Выберите свой область",
      item: [
        { text: "Выберите приоритет)" },
        { text: "Выберите приоритет" },
        { text: "Выберите приоритет" },
      ],
    },
  ];

  let arr1 = [
    {
      title: "Выберите свой область",
      item: [
        { text: "Uz (Узбекистан)" },
        { text: "Ру (Россия)" },
        { text: "EN (USA)" },
      ],
    },
  ];
  
  const router = useRouter()

  return (
    <>
      <h1 className={styles.utilityModel_title}>Селекционные достижение</h1>
      <div className={styles.utilityModel_block}>
        <div className="utilityModel_block_inner">
          <div className={styles.utilityModel_block_inner_top}>
            <a
              href="/utility_uplodeFile"
              className={styles.utilityModel_top_link}
            >
              Назад
            </a>
            <h2 className={styles.utilityModel_top_text}>Приоритеты</h2>
            <div>
            </div>
          </div>
          <div className={styles.utilityModel_block_inner_bottom}>
            <div className={styles.utilityModel_block_inner_bottom_left}>
              <h5 className={styles.utilityModel_block_inner_bottom_left_title}>Назначить дату приоритета</h5>
              <div className={styles.utilityModel_block_inner_bottom_left_inner}>
              <div className={styles.priority_input_div}>
                <Select
                  object={arr}
                  lang={false}
                  label={'Приоритет'}
                />
              </div>
              <div className={styles.priority_input_div}>
                 <Inputs
                  placeholder={'ХХХ ХХХ ХХХ'}
                  type={'text'}
                  label={'Номер заявки'}
                />
              </div>
              <div className={styles.priority_input_div}>
                <Inputs
                  placeholder={'ХХХ ХХХ ХХХ'}
                  type={'date'}
                  label={'Номер заявки'}
                />
              </div>
              <div className={styles.priority_input_div}>
                <Select
                object={arr1}
                lang={true}
                label={'Код страны'}
              />
              </div>
              <div className={styles.priority_btn_div}>
                <button className={styles.priority_btn}>
                Сохранить
              </button>
              </div>
              </div>
            </div>
            <div className={styles.utilityModel_block_inner_bottom_right}>
              <ModalBlock
                title={'Обратите внимание!'}
                type={'Графа, указывающая испрашивание приоритета, заполняется только в том случае, если приоритет запрошен до даты получения заявки Агентством'}
              />
                <div className={styles.utilityModel_block_inner_bottom_right_inner}>
                <button className={styles.utilityModel_block_inner_bottom_right_inner_btn} onClick={() => router.push("/confirmation")}>Продолжить</button>
                  <a href="" className={styles.utilityModel_block_inner_bottom_right_inner_link}>Пропустить</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Priority.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Priority;
