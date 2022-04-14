import Layout from "../../containers/layout/Layout";
import Inputs from "../../components/Inputs/Inputs";
import Select from "../../components/Select/Select";
import styles from "./utility_model.module.scss";
import { useRouter } from "next/router";
function UtilityModel() {
  const router = useRouter();
  let arr = [
    {
      title: "Выберите свой область",
      item: [
        { text: "Uz (Узбекистан)" },
        { text: "Ру (Россия)" },
        { text: "EN (USA)" },
      ],
    },
  ];
  return (
    <>
      <h1 className={styles.utilityModel_title}>Полезные модели</h1>
      <div className={styles.utilityModel_block}>
        <div className="utilityModel_block_inner">
          <div className={styles.utilityModel_block_inner_top}>
            <a href="/" className={styles.utilityModel_top_link}>
              Назад
            </a>
            <h2 className={styles.utilityModel_top_text}>Заявитель</h2>
            <div></div>
          </div>
          <div className={styles.utilityModel_block_inner_bottom}>
            <form
              action=""
              onSubmit={(e) => e.preventDefault()}
              className="utilityModel_block_inner_bottom_form"
            >
              <div className={styles.utilityModel_block_inner_bottom_block}>
                <div className={styles.utilityModel_block_inner_bottom_left}>
                  <h3 className={styles.utilityModel_block_inner_bottom_title}>
                    Ваша роль в заявке
                  </h3>
                  <div className="utilityModel_block_inner_bottom_form_input_block">
                    <input
                      type="radio"
                      id="utilityModel_block_inner_bottom_input1"
                      className={styles.utilityModel_block_inner_bottom_input}
                    />
                    <label
                      htmlFor="utilityModel_block_inner_bottom_input1"
                      className={styles.utilityModel_block_inner_bottom_label}
                    >
                      Заявитель
                    </label>
                  </div>
                  <div className="utilityModel_block_inner_bottom_form_input_block">
                    <input
                      type="radio"
                      id="utilityModel_block_inner_bottom_input2"
                      className={styles.utilityModel_block_inner_bottom_input}
                    />
                    <label
                      htmlFor="utilityModel_block_inner_bottom_input2"
                      className={styles.utilityModel_block_inner_bottom_label}
                    >
                      Доверенное лицо
                    </label>
                  </div>
                  <div className="utilityModel_block_inner_bottom_form_input_block">
                    <input
                      type="radio"
                      id="utilityModel_block_inner_bottom_input3"
                      className={styles.utilityModel_block_inner_bottom_input}
                    />
                    <label
                      htmlFor="utilityModel_block_inner_bottom_input3"
                      className={styles.utilityModel_block_inner_bottom_label}
                    >
                      Патентный проверенный
                    </label>
                  </div>
                  <div className="utilityModel_block_inner_bottom_form_input_block">
                    <input
                      type="radio"
                      id="utilityModel_block_inner_bottom_input4"
                      className={styles.utilityModel_block_inner_bottom_input}
                    />
                    <label
                      htmlFor="utilityModel_block_inner_bottom_input4"
                      className={styles.utilityModel_block_inner_bottom_label}
                    >
                      Cотрудник агенство
                    </label>
                  </div>
                </div>

                <div className={styles.utilityModel_block_inner_bottom_right}>
                  <div
                    className={styles.utilityModel_block_inner_bottom_right_top}
                  >
                    <h2
                      className={
                        styles.utilityModel_block_inner_bottom_right_title
                      }
                    >
                      Правообладатель
                    </h2>
                    <p
                      className={
                        styles.utilityModel_block_inner_bottom_right_description
                      }
                    >
                      1
                    </p>
                  </div>

                  <div
                    className={
                      styles.utilityModel_block_inner_bottom_right_face_block
                    }
                  >
                    <div
                      className={
                        styles.utilityModel_block_inner_bottom_right_face_block_inner
                      }
                    >
                      <input
                        type="radio"
                        name="utilityModel_block_inner_bottom_right_face_name"
                        id="utilityModel_block_inner_bottom_right_face_input_1"
                        className={
                          styles.utilityModel_block_inner_bottom_right_face_input
                        }
                      />
                      <label
                        htmlFor="utilityModel_block_inner_bottom_right_face_input_1"
                        className={
                          styles.utilityModel_block_inner_bottom_right_face_label
                        }
                      >
                        Физическое лицо
                      </label>
                    </div>
                    <div
                      className={
                        styles.utilityModel_block_inner_bottom_right_face_block_inner
                      }
                    >
                      <input
                        type="radio"
                        name="utilityModel_block_inner_bottom_right_face_name"
                        id="utilityModel_block_inner_bottom_right_face_input_2"
                        className={
                          styles.utilityModel_block_inner_bottom_right_face_input
                        }
                      />
                      <label
                        htmlFor="utilityModel_block_inner_bottom_right_face_input_2"
                        className={
                          styles.utilityModel_block_inner_bottom_right_face_label
                        }
                      >
                        Юридическое лицо
                      </label>
                    </div>
                  </div>

                  <div
                    className={
                      styles.utilityModel_block_inner_bottom_right_code_block
                    }
                  >
                    <div
                      className={
                        styles.utilityModel_block_inner_bottom_right_code_block_inner
                      }
                    >
                      <Select lang={true} width={"100%"} label="Код страны" />
                    </div>

                    <div
                      className={`${styles.pnflIcon} ${styles.utilityModel_block_inner_bottom_right_code_block_inner}`}
                    >
                      <Inputs
                        placeholder={"123456789101213"}
                        width={"100%"}
                        label={"ПНФЛ"}
                      />
                    </div>
                  </div>
                  <div className={styles.utilityFullName}>
                    <Inputs
                      label={"Фамилия, имя и отчество"}
                      placeholder={"Александр Александровичь"}
                      type={"text"}
                    />
                  </div>
                  <div
                    className={
                      styles.utilityModel_block_inner_bottom_right_region_block_inner
                    }
                  >
                    <div className={styles.selectArrWidth}>
                      <Select
                        object={arr}
                        placeholder={"Выберите свой область"}
                        label={"Область"}
                        width={"100%"}
                      />
                    </div>
                    <div className={styles.selectArrWidth}>
                      <Select
                        object={arr}
                        placeholder={"Выберите свой район"}
                        label={"Район"}
                        width={"100%"}
                      />
                    </div>
                  </div>
                  <div className={styles.utilityAdress}>
                    <Inputs
                      placeholder={"Ул, Паркентская, 2"}
                      label={"Адрес"}
                    />
                  </div>
                  <h6 className={styles.utilitytelephone}>
                    Ваш номер телефона
                    <p className={styles.utilitySms}>для смс оповещение</p>
                  </h6>
                  <div
                    className={
                      styles.utilityModel_block_inner_bottom_right_telephone_block_inner
                    }
                  >
                    <Inputs
                      type={"number"}
                      placeholder={"(_ _)   _ _ _   _ _   _ _"}
                    />
                  </div>
                  <div
                    className={
                      styles.utilityModel_block_inner_bottom_right_avator_block_inner
                    }
                  >
                    <input
                      type="checkbox"
                      id="avatar"
                      className={styles.utilityModel_checkbox_input}
                    />
                    <label
                      className={styles.utilityModel_checkbox_lable}
                      htmlFor="avatar"
                    >
                      Является ли этот правообладатель автором
                    </label>
                  </div>
                  <input
                    type="file"
                    id="file_input"
                    className={styles.utilityModel_download_input}
                  />
                  <label
                    htmlFor="file_input"
                    className={styles.utilityModel_download_label}
                  >
                    Добавить правообладателя
                  </label>

                  <div
                    className={styles.utilityModel_block_inner_bottom_right_top}
                  >
                    <h2
                      className={
                        styles.utilityModel_block_inner_bottom_right_title
                      }
                    >
                      Автор
                    </h2>
                    <p
                      className={
                        styles.utilityModel_block_inner_bottom_right_description
                      }
                    >
                      1
                    </p>
                  </div>

                  <div
                    className={
                      styles.utilityModel_block_inner_bottom_right_code_block
                    }
                  >
                    <div
                      className={
                        styles.utilityModel_block_inner_bottom_right_code_block_inner
                      }
                    >
                      <Select lang={true} width={"100%"} label="Код страны" />
                    </div>

                    <div
                      className={`${styles.pnflIcon} ${styles.utilityModel_block_inner_bottom_right_code_block_inner}`}
                    >
                      <Inputs
                        placeholder={"123456789101213"}
                        width={"100%"}
                        label={"ПНФЛ"}
                      />
                    </div>
                  </div>
                  <div className={styles.utilityFullName}>
                    <Inputs
                      label={"Фамилия, имя и отчество"}
                      placeholder={"Александр Александровичь"}
                      type={"text"}
                    />
                  </div>
                  <div
                    className={
                      styles.utilityModel_block_inner_bottom_right_region_block_inner
                    }
                  >
                    <div className={styles.selectArrWidth}>
                      <Select
                        object={arr}
                        placeholder={"Выберите свой область"}
                        label={"Область"}
                        width={"100%"}
                      />
                    </div>
                    <div className={styles.selectArrWidth}>
                      <Select
                        object={arr}
                        placeholder={"Выберите свой район"}
                        label={"Район"}
                        width={"100%"}
                      />
                    </div>
                  </div>
                  <Inputs placeholder={"Ул, Паркентская, 2"} label={"Адрес"} />
                  <div className={styles.mestoroboto}>
                    <Inputs
                      placeholder={"Напишите где работаете"}
                      label={"Место работы"}
                    />
                  </div>

                  <div className={styles.workPerson}>
                    <div className={styles.workPersonDiv}>
                      <Inputs
                        width={"100%"}
                        label={"Должность"}
                        placeholder={"Напишите свою должность"}
                      />
                    </div>
                    <div className={styles.workPersonDiv}>
                      <Inputs
                        width={"100%"}
                        label={"Ученная степень"}
                        placeholder={"Ваши ученная степень"}
                      />
                    </div>
                  </div>
                  <p className={styles.utilityDescription}>
                    <b>
                      Прошу не упоминать меня как автора при публикации сведений
                    </b>
                  </p>
                  <div
                    className={
                      styles.utilityModel_block_inner_bottom_right_avator_block_inner_box
                    }
                  >
                    <input
                      type="checkbox"
                      id="avatar1"
                      className={styles.utilityModel_checkbox_input}
                    />
                    <label
                      htmlFor="avatar1"
                      className={styles.utilityModel_Label}
                    >
                      О заявке
                    </label>

                    <input
                      type="checkbox"
                      id="avatar2"
                      className={styles.utilityModel_checkbox_input}
                    />
                    <label
                      htmlFor="avatar2"
                      className={styles.utilityModel_Label}
                    >
                      О выдаче патента
                    </label>
                  </div>
                  <input
                    type="file"
                    id="file_input"
                    className={styles.utilityModel_download_input}
                  />
                  <label
                    htmlFor="file_input"
                    className={styles.utilityModel_download_label}
                  >
                    Добавить автора
                  </label>
                  <div className={styles.utilityBtnDiv}>
                    <button
                      onClick={() => router.push("/utility_uplodeFile")}
                      className={styles.utilityBtn}
                    >
                      Продолжить
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
UtilityModel.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UtilityModel;
