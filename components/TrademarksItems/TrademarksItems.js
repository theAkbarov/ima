import React, {useCallback, useState} from "react";
import classes from './TrademarksItems.module.scss'
import Inputs from '../Inputs/Inputs'
import Select from '../Select/Select'
import Uploder from '../Uploder'
import Button from "../Button/Button";
const SelectBtn =()=>{
    let arr = [
        {btn:'Правообладатель',id:1},
        {btn:'Доверенное лицо',id:2},
        {btn:'Патентный проверенный',id:3},
        {btn:'Cотрудник агенство',id:4},
    ]
    const [btn, setBtn]=useState(1)
    function change(params) {
        setBtn(params)
    }
    let array =[
        {
            title: 'Выберите свой область',
            item:[
                {text:'Выберите свой область'},
                {text:'Выберите свой область'},
                {text:'Выберите свой область'},
                {text:'Выберите свой область'},
                {text:'Выберите свой область'},
            ]
        }
    ]
    let arrays =[
        {
            title: 'Выберите свой район',
            item:[
                {text:'Выберите свой район'},
                {text:'Выберите свой район'},
                {text:'Выберите свой район'},
                {text:'Выберите свой район'},
                {text:'Выберите свой район'},
            ]
        }
    ]
   return(
        <div className={classes.Trademarks_inner_middle}>
            <div className={classes.Trademarks_inner_middle_left}>
                <h3 className={classes.btn_title} > Ваша роль в заявке</h3>
                <div className={classes.SelectBtn}>
                    {
                        arr.map((elem,i)=>(
                        <button key={i} onClick={()=>change(elem.id)} className={ btn === elem.id ? classes.Selected_button  : classes.SelectBtn_button} >{elem.btn}</button>
                        ))
                    }
                </div>
            </div>
            <div className={classes.Trademarks_inner_middle_right}>
            {
                btn === 4 || btn === 3 ?
                <>
                <div className={classes.Trademarks_inner_middle_right_item_input}>
                    <Select width='46' lang={true}  label='Код страны' />
                    {
                        btn === 3 ?
                        <Select width='46' lang={true} siteLang={true}  label='Выбор языка' />
                        :
                        <Inputs width='46' type='text' placeholder='Напишите свой пнфл' label="ПНФЛ" />

                    }
                </div>
                <h4 className={classes.Trademarks_inner_middle_right_title} >Вид лица</h4>
                <div className={classes.Trademarks_inner_middle_right_item}>
                    <span>
                        <input type='radio' id='Individual' name='chack' value='Физическое лицо' />
                        <label for='Individual' >Физическое лицо</label>
                    </span>
                    <span>  
                        <input type='radio' id='Entity' name='chack' value='Юридическое лицо' />
                        <label for='Entity' >Юридическое лицо</label>
                    </span>
                </div>
                </>
                :
                <>
                <h4 className={classes.Trademarks_inner_middle_right_title} >Вид лица</h4>
                <div className={classes.Trademarks_inner_middle_right_item}>
                    <span>
                        <input type='radio' id='Individual' name='chack' value='Физическое лицо' />
                        <label for='Individual' >Физическое лицо</label>
                    </span>
                    <span>
                        <input type='radio' id='Entity' name='chack' value='Юридическое лицо' />
                        <label for='Entity' >Юридическое лицо</label>
                    </span>
                </div>
                <div className={classes.Trademarks_inner_middle_right_item_input}>
                    <Select width='46' lang={true}  label='Код страны' />
                    <Inputs width='46' type='text' placeholder='Напишите свой пнфл' label="ПНФЛ" />
                </div>
                </>

            }


            <div className={classes.Trademarks_inner_middle_right_item_name} >
                <Inputs className={classes.Inputsd}  width='100' type='text' placeholder='Напишите свою Фамилию, имя и отчество' label="Фамилия, имя и отчество" />
            </div>
            <div className={classes.Trademarks_inner_middle_right_item_input}>
                <Select width='46' object={array} lang={false}  label='Выберите свой область' />
                <Select width='46' object={arrays} lang={false}  label='Выберите свой район' />
            </div>
            <div className={classes.Trademarks_inner_middle_right_item_name} >
                <Inputs className={classes.Inputsd}  width='100' type='text' placeholder='Адрес' label="Адрес" />
            </div>
            <div className={classes.Trademarks_inner_middle_right_item_name} >
                <Inputs className={classes.Inputsd}  width='100' type='number' placeholder='(_ _)   _ _ _   _ _   _ _' label="Ваш номер телефона для смс оповещение" />
            </div>
            {
                btn === 2 ?
                <Uploder title='Приложите доверенность' />
                : ''
            }
                    {
                btn === 4 ?
                <Uploder title='Документ об уплате пошлины' />
                : ''
            }

        </div>
    </div>


   )   
}
export default SelectBtn