import React, {useState} from "react";
import classes from './Classes.module.scss'
import img from '../../public/assets/icons/VectorS.png'
import images from '../../public/assets/icons/www.png'
import imgclos from '../../public/assets/icons/Vectorggg.png'
import Image from "next/image";
import Dropdown from "../Dropdown";
import Modals from "../Modals/Modals";
export default function Classes() {
   let item=[
        {
            text:'Альдегидаммиак',
            check:false,
        },
        {
            text:'Альдегидаммиак',
            check:false,
        },
        {
            text:'Альдегидаммиак',
            check:false,
        },
        {
            text:'Альдегид кротоновый',
            check:false,
        },
        {
            text:'Альдегиды',
            check:false,
        },
        {
            text:'Америций',
            check:false,
        },
        {
            text:'Амилацетат',
            check:false,
        },
        {
            text:'Аммиак',
            check:false,
        },
       ]
       const [modal,setModal]=useState(false)
       function open() {
           setModal(true)
           window.scrollTo(0,0)
       }
       function close() {
        setModal(false)
    }
    return(
        <div className={classes.Classes}>
            <div className={classes.Classes_header} >
                <input className={classes.Classes_header_input} type='text' placeholder='Поиск по классам, наименование и название товаров '  />
                <button className={classes.Classes_header_btn} > Сравить знак по классам </button>
            </div>
            <div className={classes.Classes_inner} >
                <div className={classes.Classes_inner_left} >
                    <div className={classes.Classes_inner_left_header}>
                        <input className={classes.item} id="check" type='checkbox' />
                        <label className={classes.box} htmlFor="check"><Image src={img} /></label>
                        <label className={classes.textet} htmlFor="check"> Выбрать все классы <span>(45)</span>  </label>
                    </div>
                    <div className={classes.Classes_inner_left_item} >
                       <Dropdown/>
                    </div>
                </div>
                <div className={classes.Classes_inner_right} >
                    <h2 className={classes.Classes_inner_right_title}>Выбранные категории</h2>
                    <div className={classes.Classes_inner_right_item} >
                        <p>1 Класс <Image src={images} /> </p>
                        <button onClick={open} >Показать</button>
                    </div>
                </div>
                {
                    modal ? 
                    <div className={classes.Classes_inner_modal} >
                        <div className={classes.back} > <Image onClick={close} src={imgclos}/> </div>
                        <Modals func={close} item={item} />
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    )
    
}