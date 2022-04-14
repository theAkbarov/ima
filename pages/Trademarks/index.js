import React,{useState} from 'react'
import classes from './Trademarks.module.scss'
import TrademarksItems from '../../components/TrademarksItems'
import Image from 'next/image';
import images from '../../public/assets/icons/Vectored.png'
import Layout from '../../containers/layout/Layout';
import Button from '../../components/Button/Button';
import Trademarkspage from '../../components/Trademarkspage';
import Classes from '../../components/Classes';
const Trademarks =()=>{
    const [page,setpage]=useState('Заявитель')
    
    function next() {
        if(page === 'Товарный знак'){
            setpage('Классы')
        }else{
            setpage('Товарный знак')
        }
    } 
    function back() {
        if( page ===  'Классы') {
            setpage('Товарный знак')
        }else{
            setpage('Заявитель')
        }
    }


    return(
        <div className={classes.Trademarks} >
            <h1 className={classes.Trademarks_title}>Товарные знаки</h1>
            <div className={classes.Trademarks_inner}>
                <div className={classes.Trademarks_inner_title}>
                    <p className={classes.Trademarks_inner_title_btn} onClick={back} > <Image src={images}  /> Назад</p>
                    <h2 className={classes.Trademarks_inner_title_text} >{page}</h2>
                </div>
                {
                    page === 'Классы' ? 
                    <Classes/> 
                    :
                     page === 'Товарный знак'?
                    <Trademarkspage/>
                      :
                     <TrademarksItems  />
                }
             
                <div className={classes.Button_btn} onClick={next} >
                    <Button  title='Продолжить' type='primary' />
                </div>
            </div>

        </div>
    )

}
export default Trademarks

Trademarks.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};