import Image from "next/image";

import classes from "./DatabaseSearch.module.scss";
import exit from "../../public/assets/icons/exit.png";
import Inputs from "../../components/Inputs/Inputs";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox"
import { CHECKBOX } from "../../public/db";
import search from "../../public/assets/icons/whitesearch.png"

export const DatabaseSearch = ({setState}) => {
  function changed(params) {
    if (params === "Изобразительный знак") {
      setopen(true);
    } else {
      setopen(false);
    }
    console.log(open);
  }
  let arr = [
    {
      title: "Выберите название поля",
      item: [
        { text: "Изобразительный знак" },
        { text: "Изобразительный знак2" },
        { text: "Изобразительный знак3" },
      ],
    },
  ];
  return (
    <div className={classes.databaseSearch_wrapper}>
      <div className={classes.title_wrapper}>
        <p className={classes.database_title}>Рассширенный поиск</p>
        <button className={classes.search_exit} onClick={() => setState(true)}>
          <Image src={exit} alt="search" width="20" height="20" />
        </button>
      </div>
      <div className={classes.input_wrapper}>
        <Select changed={changed} lang={false} label="Имя поля" object={arr} />
        <div className={classes.d_flex_select}>
          <div className={classes.search_select}>
            {" "}
            <Select
              changed={changed}
              lang={false}
              label="Имя поля"
              object={arr}
            />
          </div>
          <div className={classes.search_select}>
            <Inputs
              width="48%"
              type="text"
              placeholder="Напишите значение площади"
              label="Значение площади"
            />
          </div>
        </div>
      </div>
      <div className={classes.checkbox_wrapper}>

        <div className={classes.top_checkbox_wrapper}>
            <div className={classes.inner_checkboxes}>
          <div>
            <input type="checkbox" id="check" name="check" />
            <label htmlFor="checklabel">Выбрать все</label>
          </div>

          <div>
            <input type="checkbox" id="check" name="check" />
            <label htmlFor="checklabel">Широкая подборка</label>
          </div>

          <div>
            <input type="checkbox" id="check" name="check" />
            <label htmlFor="checklabel">Краткая подборка</label>
          </div>
          </div>
          <p className={classes.top_checkbox_title}>
            Очистить  
          </p>
        </div>

        <div className={classes.checkboxes_below_wrapper}>
            {
                CHECKBOX.map((el, id) => (
                    <Checkbox title={el.title} i={el.id}/>
                ))
            }
        </div>
            <button className={classes.search_checkbox}>
                Поиск
                <div>
                 <Image src={search} alt="msg" width="15" height="15"  className={classes.msg}/>
                 </div>
            </button>
      </div>
    </div>
  );
};
