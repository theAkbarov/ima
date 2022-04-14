import React from "react";
import Image from 'next/image'
import classes from "./Header.module.scss"
import search from "../../public/assets/icons/SEARCH.png"
import down from "../../public/assets/icons/down.png"
import msg from "../../public/assets/icons/message.png"
import notif from "../../public/assets/icons/notif.png"
import eye from "../../public/assets/icons/EYE.svg"
import prof from "../../public/assets/images/prof.png"
import Link from "next/link";
const Header = () => {
	return (
		<div className={classes.header_container}>
			<div className={classes.left_side}>
				<div className={classes.input_wrapper}>
					<button className={classes.search}>
						<Image
							src={search}
							alt="search"
							width="18"
							height="18"
						/>
					</button>
					<input
						placeholder="Поиск по сайту"
						className={classes.header_input}
					/>
					<button>
						<Image
							src={eye}
							alt="eye"
							width="25"
							height="18"
							className={classes.eye}
						/>
					</button>
				</div>
			</div>

		 <div className={classes.right_side}>
      <div className={classes.lang_wrapper}>
        <button>
        <p className={classes.lang_txt}>Русский</p>
          <Image src={down} alt="down" width="9" height="5" />
        </button>
      </div>

      <div className={classes.icons_wrapper}>
        <button>
          <Image src={msg} alt="msg" width="18" height="18"  className={classes.msg}/>
        </button>
        <button>
          <Image src={notif} alt="msg" width="18" height="18"  className={classes.notif}/>
        </button>
      </div>

      <div className={classes.profile_pic_wrap}>
          <Link href='/account' className={classes.prof_pic}>
        <button className={classes.profile}>
            <Image src={prof} alt="msg" width="40" height="40" />
          <Image src={down} alt="down" width="9" height="5" />
        </button>
          </Link>
      </div>
			</div>
		</div>
	);
};

export default Header;
