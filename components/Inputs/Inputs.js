import { useState } from 'react'
import classes from './Inputs.module.scss'
export default function Inputs({label,width,placeholder,type}){
    return(
        <div style={{width:`${width}%`}} className={classes.inputs} >
            <label>
                {label}
                <span>
                    {
                    type === 'number' ? 
                    <div className={classes.Inputs_number}>
                        <p>+998</p>
                    </div> 
                    :''
                    }
                    <input className={classes.Inputs_inner} type={type} placeholder={placeholder} />
                </span>
            </label>
        </div>
    )
}