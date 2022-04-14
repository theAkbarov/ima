import React from "react";
import classes from './Modals.module.scss'
export default function Modals({item}) {
    return(
        <div className={classes.Modals} >
            <h1 className={classes.Modals_title} >Выбранные категрии из 2 класса</h1>
            <div className={classes.Modals_inner} >
                <div className={classes.Modals_inner_left} >
                    {
                        item.map((elem,i)=>(
                            <p key={i} ><button  ></button>{elem.text}</p>
                        ))
                    }
                </div>
                <div className={classes.Modals_inner_right} >
                    <h2 className={classes.Modals_inner_right_title} >Добавить рубрику (на русском)  </h2>
                    <input className={classes.Modals_inner_right_input} type='text' placeholder="Напишите ключевое слово" />
                    <p>Добавить язык</p>
                </div>
            </div>
        </div>
    )
    
}