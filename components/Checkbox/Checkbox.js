import React from "react";
import classes from './Checkbox.module.scss'
import img2 from '../../public/assets/icons/VectorS.png'
import Image from "next/image";
export default function Checkbox({title,i,text}){
    return(
        <div className={classes.Checkbox} >
            <span  className={classes.Dropdown_inner_item} >
                 <input value={title} className={classes.item}  id={`${title}${i}`} type='checkbox' />
                 <label className={classes.box} htmlFor={`${title}${i}`}><Image src={img2} /></label>
                 {
                    text ?
                    <label className={classes.textet} htmlFor={`${title}${i}`}>{title}<span>{text}</span></label>
                    :
                    <label className={classes.textet} htmlFor={`${title}${i}`}>{title}</label>

                 }
            </span>
        </div>
    )
}