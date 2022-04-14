
import classes from './icongroup.module.scss'
import Iconblock from '../iconBlock/iconblock'
export default function IconGroup({width }) {
    return (
        <div className={classes.iconGroup_block} style={width}>
            <Iconblock/>
            <Iconblock/>
            <Iconblock/>
            <Iconblock/>
            <Iconblock/>
        </div>
    )
}