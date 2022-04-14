import React, { useEffect, useState } from "react";
import classes from './Dropdown.module.scss'
import img from '../../public/assets/icons/Vector1.png'
import Image from "next/image"
import Checkbox from "../Checkbox";
import img2 from '../../public/assets/icons/VectorS.png'

export default function Dropdown() {
    const [ind,setInd]=useState(null)
    function show(params) {
        if (params===ind) {
           setInd(null)
        }else{
            setInd(params)
        }
    }
    function selAll() {
       let obj = srr 
       obj.map((ite)=>{
            if (ite.check) {
                ite.item.map((elem)=>{
                    elem.check=true
                })
                
            }
        })
        setSrr(obj)
        
    }
    const [srr,setSrr] =useState([
        {
           title:'1 Класс',
           check:true,
           item:[
            {   
                text:'Агар-агар',
                check:false,
            },
            {
                text:'Азот',
                check:false,
            },
            {
                text:'Актиний',
                check:false,
            },
            {
                text:'Алкалоиды',
                check:false,
            },
            {
                text:'Альгинаты для пищевой промышленности',
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
        },
        {
            title:'2 Класс',
            check:false,

            item:[
                {   
                    text:'Агар-агар',
                    check:false,
                },
                {
                    text:'Азот',
                    check:false,
                },
                {
                    text:'Актиний',
                    check:false,
                },
                {
                    text:'Алкалоиды',
                    check:false,
                },
                {
                    text:'Альгинаты для пищевой промышленности',
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
         },
         {
            title:'3 Класс',
            check:false,
                item:[
                    {   
                        text:'Агар-агар',
                        check:false,
                    },
                    {
                        text:'Азот',
                        check:false,
                    },
                    {
                        text:'Актиний',
                        check:false,
                    },
                    {
                        text:'Алкалоиды',
                        check:false,
                    },
                    {
                        text:'Альгинаты для пищевой промышленности',
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
         },
         {
            title:'4 Класс',
            check:false,

            item:[
                {   
                    text:'Агар-агар',
                    check:false,
                },
                {
                    text:'Азот',
                    check:false,
                },
                {
                    text:'Актиний',
                    check:false,
                },
                {
                    text:'Алкалоиды',
                    check:false,
                },
                {
                    text:'Альгинаты для пищевой промышленности',
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
         },
         {
            title:'5 Класс',
            check:false,

            item:[
                {   
                    text:'Агар-агар',
                    check:false,
                },
                {
                    text:'Азот',
                    check:false,
                },
                {
                    text:'Актиний',
                    check:false,
                },
                {
                    text:'Алкалоиды',
                    check:false,
                },
                {
                    text:'Альгинаты для пищевой промышленности',
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
         },
         {
            title:'6 Класс',
            check:false,

            item:[
                {   
                    text:'Агар-агар',
                    check:false,
                },
                {
                    text:'Азот',
                    check:false,
                },
                {
                    text:'Актиний',
                    check:false,
                },
                {
                    text:'Алкалоиды',
                    check:false,
                },
                {
                    text:'Альгинаты для пищевой промышленности',
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
         },
    ])
    return(
        <>
            {
                srr.map((elem,index)=>(
                    <div key={index}  className={classes.Dropdown} >
                        <div onClick={()=>show(index)} className={classes.Dropdown_header} >
                            <span>
                                <input className={classes.item} id="drop" type='checkbox' />
                                <label className={classes.box} htmlFor="drop"><Image src={img2} /></label>
                                <label className={classes.textet} htmlFor="drop">{elem.title}  </label>
                            </span>
                            <Image src={img} />
                        </div>
                        <div className={ ind === index ?  classes.open_close : `${classes.open_close} ${classes.hide}`} >
                            <div  className={classes.Dropdown_inner} >
                                {
                                    elem.item.map((et,i)=>(
                                        <Checkbox title={et.text} i={`${i} ${index} `} />
                                    ))
                                }
                            </div>
                            <div className={classes.Dropdown_inner_bottom} >
                                <h2 className={classes.Dropdown_inner_bottom_title} >Добавить рубрику (на русском) <p>Добавить язык</p> </h2>
                                <input className={classes.Dropdown_inner_bottom_input} type='text' placeholder="Напишите ключевое слово" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    )
    
}