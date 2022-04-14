import React, { useState,useEffect } from "react";
import classes from './Trademarkspage.module.scss'
import Select from '../Select'
import Button from "../Button/Button";
import Image from "next/image";
import image from '../../public/assets/images/Mask Group.png'
import plus from '../../public/assets/icons/plus.png'
import Uploder from "../Uploder";
import icons from '../../public/assets/icons/i.png'
export default function Trademarkspage() {
    const [open,setopen]=useState(false)
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [ani,setAni]=useState(false)
    const [anime,setAnime]=useState(false)
    const [percent,setPercent]=useState(0)
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        setAni(true)

        setTimeout(() => {
            setAni(false)
            setAnime(true)
        }, 2000);
        let  t = setInterval(function() {
            setPercent(percent++);
           if (percent === 100){
               clearInterval(t);
               setPercent(percent=0);
           }
       }, 20);

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)

    }, [selectedFile])
    useEffect(()=>{
        setAnime(false)

    },[preview])
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    function changed(params) {
        if (params==='Изобразительный знак') {
            setopen(true)
        }else{
            setopen(false)

        }
    }
    let arr =[
        {
            title: 'Выберите тип Вашего знака',
            item:[
                {text:'Изобразительный знак'},
                {text:'Изобразительный знак2'},
                {text:'Изобразительный знак3'},
            ]
        }
    ]
    console.log(preview);
     return(
         <div className={classes.Trademarkspage} >
             <div className={classes.Trademarkspage_left}>
                 <div className={classes.Trademarkspage_left_item}>
                    <Select changed={changed} lang={false} label='Тип знака' object={arr} />
                 </div>
                 <div className={ open  ?  `${classes.Trademarkspage_left_item_inner_main}${classes.open}`  : classes.Trademarkspage_left_item_inner_main} >
                    <div className={classes.Trademarkspage_left_item_inner}>
                        <Image src={image} />
                        <span>
                            <h2>Изобразительный знак</h2>
                            <p>Изображения живых существ, предметов, природных и других объектов, а также линий, пятен, плоскостных композиций любой фигуры <span>(кроме объемов)</span> .</p>
                        </span>
                    </div>
                    <div className={classes.Trademarkspage_left_item_input}>
                        <label>Описание подаваемого знака  <Image src={icons} /> </label>
                        <input type="text" placeholder="Напишите описание знака в цветном исполнении " />
                    </div>
                    <div className={classes.Trademarkspage_left_item_input}>
                        <label>Цвет или цветовое сочетание <Image src={icons} /> </label>
                        <input type="text" placeholder="Напишите описание знака в цветном исполнении  " />
                    </div>
                    <div className={classes.Trademarkspage_left_item_input}>
                        <span>
                            <input className={classes.check} id="chek" type='checkbox' />
                            <label htmlFor='chek' >Коллектиный знак</label>
                        </span>
                        <p>Товарный знак, предназначенный для обозначения производимых и реализуемых ими товаров объединения юридических и физических лиц одного качества или иных общих признаков, является коллективным знаком</p>
                    </div>
                    <div className={classes.Trademarkspage_left_item}>
                    <Uploder title='Приложите коллективный договор' />
                    </div>
                 </div>
             </div>
             <div className={classes.Trademarkspage_right}>

                {
                    open ?
                    anime   ?
                    <div className={classes.upload_img} >
                        <Image width='320' height="230" src={preview}/>
                        <span>
                            <label htmlFor='img' className={classes.change_btn} >Изменить фото</label>
                            <input onChange={onSelectFile} type='file' id="img" className={classes.Trademarkspage_right_item} />
                        </span>
                    </div>
                    :
                    <div className={ classes.Trademarkspage_right_inside } >
                        <div className={classes.black} >
                        <p className={ ani ?  classes.prercent : classes.none } >{percent}%</p>
                            <div className={ ani ?  classes.animate : classes.Trademarkspage_right_inside_child}>
                                <label htmlFor="img" className={ ani ? classes.none : classes.Trademarkspage_right_inner} > <Image src={plus} /> </label>
                                <label htmlFor="img" className={  ani ? classes.none :  classes.Trademarkspage_right_text} > Загрузите товарный знак <span>jpeg или png не больше 10 mb</span> </label>
                                <input onChange={onSelectFile} type='file' id="img" className={ ani ? classes.none : classes.Trademarkspage_right_item} />
                            </div>
                        </div>
                    </div>
                      :
                    ''
                }  
             </div> 
         </div>
     )   
}