import React from "react";
import classes from './Uploder.module.scss'
export default function Uploder({title}) {
    return(
        <div className={classes.Trademarks_inner_middle_right_upload}>
            <label className={classes.title_one} htmlFor="myfile">{title}</label>
            <label className={classes.title_two} htmlFor="myfile">pdf, jpeg или png не больше 5 mb</label>
            <input className={classes.Trademarks_inner_middle_right_upload_item} id='myfile' type='file' />
        </div>
    )
    
}