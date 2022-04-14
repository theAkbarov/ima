
import styles from "./utility_model.module.scss";
import Layout from "../../containers/layout/Layout";
import Uploder from '../../components//Uploder/Uploder'
import Iconblock from "../../components/iconBlock/iconblock";
import IconGroup from "../../components/iconGroup/icongroup";
import { useRouter } from "next/router";

function utilityUplodeFile() {
  const router = useRouter();

  return (
    <>
      <h1 className={styles.UplodeFile_Title}>Полезные модели</h1>
      <IconGroup width={{ width: "800px" }} />
      <div className={styles.utilityModel_block}>
        <div className={styles.utilityModel_block_inner_top}>
          <a href="/utility_model" className={styles.utilityModel_top_link}>
            Назад
          </a>
          <h2 className={styles.utilityModel_top_text}>Модель</h2>
          <div></div>
        </div>
        <div className={styles.uplodeFile_top}>
          <h3 className={styles.uplodeFile_title}>Нзазвание полезной модели</h3>
          <div className={styles.downloads_language}>
            <input
              type="file"
              id="file_input"
              className={styles.utilityModel_download_input}
            />
            <label
              htmlFor="file_input"
              className={styles.utilityModel_download_label}
            >
              Добавить язык
            </label>
          </div>
        </div>
        <div className={styles.uplodeFile_middle}>
          <input
            type="text"
            placeholder="Как называется Ваше изобретение"
            className={styles.uplodeFile_document}
          />
          <span className={styles.uplodeFile_language}>Ru</span>
        </div>
        <div className={styles.uplodeFile_center}>
          <h3 className={styles.uplodeFile_title}>Адрес переписки</h3>
          <input
            type="text"
            placeholder="Напишите свой почтовый индекс и свой адрес"
            className={styles.uplodeFile_address}
          />
        </div>
        <div className={styles.hr_block}> </div>
        <h3
          className={`${styles.uplodeFile_title} ${styles.uplodeFile_title_uplodeFile}`}
        >
          Файлы которые можно приложить к заявке!
        </h3>
        <div className={styles.uplode_file_block}>
          <div className={styles.uploder_file_inner}>
            <Uploder title={"Описание полезной модели"} />
          </div>
          <div className={styles.uploder_file_inner}>
            <Uploder
              title={
                "Формула полезной модели (Колличество независимых пунктов формулы)"
              }
            />
          </div>
          <div className={styles.uploder_file_inner}>
            <Uploder title={"Чертеж (и) модели  "} />
          </div>
          <div className={styles.uploder_file_inner}>
            <Uploder title={"Реферат полезной модели"} />
          </div>
          <div className={styles.uploder_file_inner}>
            <Uploder
              title={
                "Копия свидетельства ранее зарегистрированного товарного знака"
              }
            />
          </div>
          <div className={styles.uploder_file_inner}>
            <Uploder
              title={
                "Перевод на узбекский и русский язык прилагаемых документов"
              }
            />
          </div>
        </div>
        <div className={styles.uploder_file_inner_box}>
          <Uploder title={"Другой документ"} />
        </div>
        <div className={styles.utilityBtnDiv}>
          <button
            className={styles.utilityBtn}
            onClick={() => router.push("/priority")}
          >
            Продолжить
          </button>
        </div>
      </div>
    </>
  );
}
utilityUplodeFile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default utilityUplodeFile;
