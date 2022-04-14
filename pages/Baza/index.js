import { FILTEREDMENU } from "../../public/db.js";
import { PRODUCTFILTER } from "../../public/db.js";
import { Pagination } from "antd";
import Image from "next/image";
import Layout from "../../containers/layout/Layout";
import searchsvg from "../../public/assets/icons/searchsvg.svg";
import prev from "../../public/assets/icons/prev.png";
import next from "../../public/assets/icons/next.png";

import "antd/dist/antd.css";
import classes from "./Baza.module.scss";
import { DatabaseSearch } from "../../containers/DatabaseSearch/DatabaseSearch.js";
import { useState } from "react";

const Baza = () => {
    const renderPagination = (current, type, originalElement) => {
        if (type === "prev") {
            return (
                <button className={classes.next_btn}>
                    <div className={classes.prev_icon}>
                        <Image src={prev} alt="search" width="9" height="10" />
                    </div>
                    <p>Назад </p>
                </button>
            );
        }
        if (type === "next") {
            return (
                <button className={classes.next_btn}>
                    <p> Вперед</p>
                    <div className={classes.next_icon}>
                        <Image src={next} alt="search" width="9" height="10" />
                    </div>
                </button>
            );
        }
        return originalElement;
    };
    const [state , setState] = useState(true)
    return (
            
               <div className={classes.database_wrapper}>
            <p className={classes.database_title}>База данных</p>

            <div className={classes.database_top_content}>
                <ul className={classes.filter_part}>
                    {FILTEREDMENU.map((el, i) => (
                        <li key={i}>{el.link}</li>
                    ))}
                </ul>
            </div>

                {
                    state ? (
                        <>
                               <div className={classes.database_middle_content}>
                <div className={classes.search_button_wrapper}>
                    <div className={classes.btn_wrapper}>
                        <button className={classes.selected}>Все</button>
                        <button className={classes.unselected}>Действующие</button>
                        <button className={classes.unselected}>На рассмотрение</button>
                    </div>
                    <button onClick={() => setState(false)} className={classes.search_part}>
                        <div className={classes.search_btn}>
                        <Image src={searchsvg} alt="search" width="18" height="18" />
                        </div>
                         Расширинный поиск
                    </button>
                </div>
            </div>

            <div className={classes.database_below_content}>
                <ul>
                    <li className={classes.product_header}>
                        <p>Изображение</p>
                        <p>Номер заявки</p>
                        <p>Дата подачи</p>
                        <p>МКТУ</p>
                        <p>Статус</p>
                        <p className={classes.none}></p>
                    </li>

                    {PRODUCTFILTER.map((item, id) => (
                        <li className={classes.filtered_item} key={item.id}>
                            <div className={classes.butterfly}>
                                <Image src={item.img} alt="search" width="120" height="100" />
                            </div>
                            <div className={classes.padding_left}>
                                <p>{item.number}</p>
                            </div>
                            <div>
                                <p>{item.date}</p>
                            </div>
                            <div>
                                <p>{item.mkty}</p>
                            </div>

                            <div>
                                {item.status === "Одобрено" ? (
                                    <button className={classes.status_btn}>{item.status}</button>
                                ) : item.status === "Ожидание" ? (
                                    <button className={classes.status_btn_orange}>
                                        {item.status}
                                    </button>
                                ) : item.status === "Отказано" ? (
                                    <button className={classes.status_btn_red}>
                                        {item.status}
                                    </button>
                                ) : null}
                            </div>

                            <div className={classes.last_div}>
                                <button>Подробнее</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={classes.pagination}>
                <Pagination
                    showSizeChanger={false}
                    defaultCurrent={1}
                    total={100}
                    itemRender={(current, type, originalElement) =>
                        renderPagination(current, type, originalElement)
                    }
                />
            </div></>
                    ) : (<DatabaseSearch setState={setState}/>) 
                }
        </div>
    );
};

export default Baza;

Baza.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
