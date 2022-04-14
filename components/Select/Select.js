import classes from './Select.module.scss'
import img2 from '../../public/assets/icons/Vector1.png'
import img3 from '../../public/assets/icons/Vector.png'

import Image from 'next/image'
import React, {useState} from 'react'
const Select =({lang,width,object,label,siteLang,changed})=>{
    const [val,setval]=useState(false)
    const [choose,setChoose] =useState('Uz')
    const [chooseen,setChooseen] =useState('Uzbek')
    const [choosed,setChoosed] =useState('Выберите свой область')
    function show() {
        setval(!val)
    }
    function select(params) {
        setval(!val)
        setChoose(params)
        setChoosed(params)
        setChooseen(params)
    }

    return (
      <div style={{ width: `${width}%` }}>
        {lang ? (
          <div className={classes.Select}>
            <p>{label}</p>
            {siteLang ? (
              <div onClick={show} className={classes.Select_item}>
                <div className={classes.Select_item_top}>
                  <p>
                    {" "}
                    <Image className={classes.flag} src={img3} /> {chooseen}{" "}
                  </p>{" "}
                  <Image className={val ? classes.images : ""} src={img2} />
                </div>
                <ul className={val ? classes.open : classes.Select_item_inner}>
                  <li onClick={() => select("Russain")}>
                    {" "}
                    <Image className={classes.flag} src={img3} />
                    Russian{" "}
                  </li>
                  <li onClick={() => select("English")}>
                    {" "}
                    <Image className={classes.flag} src={img3} />
                    English{" "}
                  </li>
                  <li onClick={() => select("Uzbek")}>
                    {" "}
                    <Image className={classes.flag} src={img3} /> Uzbek{" "}
                  </li>
                </ul>
              </div>
            ) : (
              <div onClick={show} className={classes.Select_item}>
                <div className={classes.Select_item_top}>
                  <p>
                    {" "}
                    <Image className={classes.flag} src={img3} /> {choose}{" "}
                    <span> (Узбекистан)</span>{" "}
                  </p>{" "}
                  <Image className={val ? classes.images : ""} src={img2} />
                </div>
                <ul className={val ? classes.open : classes.Select_item_inner}>
                  <li onClick={() => select("Ru")}>
                    {" "}
                    <Image className={classes.flag} src={img3} />
                    Ru <span> (Узбекистан)</span>
                  </li>
                  <li onClick={() => select("Eng")}>
                    {" "}
                    <Image className={classes.flag} src={img3} />
                    Eng <span> (Узбекистан)</span>
                  </li>
                  <li onClick={() => select("Uz")}>
                    {" "}
                    <Image className={classes.flag} src={img3} /> Uz{" "}
                    <span> (Узбекистан)</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className={classes.Select}>
            <p>{label}</p>
            {object.map((elem, i) => (
              <div key={i} onClick={show} className={classes.Select_item}>
                <div className={classes.Select_item_top}>
                  <p>
                    <span>{choosed}</span>{" "}
                  </p>{" "}
                  <Image className={val ? classes.images : ""} src={img2} />
                </div>
                <ul className={val ? classes.open : classes.Select_item_inner}>
                  {changed
                    ? elem.item.map((el, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            select(el.text);
                            changed(el.text);
                          }}
                        >
                          <span>{el.text}</span>
                        </li>
                      ))
                    : elem.item.map((el, i) => (
                        <li key={i} onClick={() => select(el.text)}>
                          <span>{el.text}</span>
                        </li>
                      ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );

}
export default Select