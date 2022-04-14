import classes from './iconblock.module.scss'
import sss from '../../assets/images/plus/Изобретение/Vector.svg'
import eee from '../../assets/images/plus/Изобретение/Check mark.svg'
import Image from 'next/image'
export default function iconblock({  }) {
    return (
        <div className={classes.iconBlock_e}>
                <Image src={sss} alt="" className={classes.iconBlock_Img} />
                <Image src={eee} className={classes.ellipse} alt="" />
        </div>
    )
}