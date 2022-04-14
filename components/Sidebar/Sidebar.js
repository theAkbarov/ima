import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Sidebar.module.scss";
import logo from "../../public/assets/images/logo.png";
import utube from "../../public/assets/icons/youtube.svg";
import telegram from "../../public/assets/icons/telegram.svg";
import facebook from "../../public/assets/icons/f.svg";
import instagram from "../../public/assets/icons/instagram.svg";
import {
    Akt,
    Analitika,
    Baza,
    Contact,
    Main,
    Payment,
    Question,
    Service,
} from "../../public/assets/icons";

export const Sidebar = () => {
    return (
      <div className={classes.sidebar_wrapper}>
        <div className={classes.top_side}>
          <Image
            src={logo}
            alt="search"
            width="43"
            height="43"
            className={classes.logo}
          />
          <p className={classes.logo_txt}>ОХРАНА ПРОМЫШЛЕННОЙ СОБТВЕННОСТИ</p>
        </div>

        <div className={classes.icons_wrapper}>
          <div className={classes.above}>
            <ul>
              <li>
                <Link href="/">
                  <a href="/" style={{ display: "flex" }}>
                    <div>
                      <Main />
                    </div>
                    <span className={classes.sidebar_txt}>Главная</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Trademarks">
                  <a href="/Trademarks" style={{ display: "flex" }}>
                    <div>
                      <Service />
                    </div>
                    <span className={classes.sidebar_txt}>Наши Услуги</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/utility_model">
                  <a href="utility_model" style={{ display: "flex" }}>
                    <div>
                      <Payment />
                    </div>
                    <span className={classes.sidebar_txt}>
                      Оплата за услугу
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <>
                    <div>
                      <Akt />
                    </div>
                    <span className={classes.sidebar_txt}>Н-правовые акты</span>
                  </>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <>
                    <div>
                      <Analitika />
                    </div>
                    <span className={classes.sidebar_txt}>Аналитика</span>
                  </>
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.below}>
            <ul>
              <li>
                <Link href="/">
                  <>
                    <div>
                      <Question />
                    </div>
                    <span className={classes.sidebar_txt}>
                      Вопросы и ответы
                    </span>
                  </>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <>
                    <div>
                      <Baza />
                    </div>
                    <span className={classes.sidebar_txt}>База данных</span>
                  </>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <>
                    <div>
                      <Contact />
                    </div>
                    <span className={classes.sidebar_txt}>Контакты</span>
                  </>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.social_icons}>
          <div>
            {" "}
            <Link href="https://www.youtube.com/">
              <a>
                <Image
                  src={utube}
                  alt="search"
                  width="25"
                  height="18"
                  className={classes.icon_item}
                />{" "}
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.youtube.com/">
              <a>
                <Image
                  src={telegram}
                  alt="search"
                  width="25"
                  height="18"
                  className={classes.icon_item}
                />
              </a>
            </Link>
          </div>
          <div>
            {" "}
            <Link href="https://www.youtube.com/">
              <a>
                <Image
                  src={facebook}
                  alt="search"
                  width="25"
                  height="18"
                  className={classes.icon_item}
                />{" "}
              </a>
            </Link>
          </div>
          <div>
            {/* <InstagramIcon /> */}{" "}
            <Link href="https://www.youtube.com/">
              <a>
                <Image
                  src={instagram}
                  alt="search"
                  width="25"
                  height="18"
                  className={classes.icon_item}
                />{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      //   </div>
    );
};
