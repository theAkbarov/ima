import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactsScss from './Contacts.module.scss';
import YoutubeIcon from '../../assets/images/youtube-icon.svg';
import TelegramIcon from '../../assets/images/telegram-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import InstagramIcon from '../../assets/images/instagram-icon.svg';
import MapImg from '../../assets/images/karta.jpg';

function Contacts() {
	return (
		<>
			<div className={ContactsScss.contact}>
				<h1 className={ContactsScss.contact_title}>Контакты</h1>
				<ul className={ContactsScss.contact_list}>
					<li className={ContactsScss.contact_item}>
						<ul className={ContactsScss.contact_sublist}>
							<li className={ContactsScss.contact_subitem}>
								<h4 className={ContactsScss.contact_subtitle}>
									Телефон
								</h4>
								<p className={ContactsScss.contact_telnumber}>
									+998 (71) 232 50 50
								</p>
							</li>
							<li className={ContactsScss.contact_subitem}>
								<h4 className={ContactsScss.contact_subtitle}>
									Телефон доверие
								</h4>
								<p className={ContactsScss.contact_telnumber}>
									+998 (71) 232 50 54
								</p>
							</li>
							<li className={ContactsScss.contact_subitem}>
								<h4 className={ContactsScss.contact_subtitle}>
									Тех поддержка
								</h4>
								<p className={ContactsScss.contact_telnumber}>
									+998 (71) 232 50 05
								</p>
							</li>
							<li className={ContactsScss.contact_subitem}>
								<h4 className={ContactsScss.contact_subtitle}>
									Факс
								</h4>
								<p className={ContactsScss.contact_telnumber}>
									+998 (71) 232 50 51
								</p>
							</li>
						</ul>
					</li>
					<li className={ContactsScss.contact_item}>
						<span className={ContactsScss.contact_address}>
							<h4 className={ContactsScss.contact_subtitle}>
								Адрес
							</h4>
							<p className={ContactsScss.contact_addresstext}>
								100174, г. Ташкент, <br /> Алмазарский район,{' '}
								<br /> ул. Университетская, 7
							</p>
						</span>
						<span className={ContactsScss.contact_job}>
							<h4 className={ContactsScss.contact_jobtime}>
								Режим работы
							</h4>
							<p className={ContactsScss.contact_jobtimeday}>
								Пн – Пт <br /> 09:00 — 18:00
							</p>
							<p className={ContactsScss.contact_jobtimelunch}>
								Обед 12:00 — 13:00
							</p>
						</span>
					</li>
					<li className={ContactsScss.contact_item}>
						<span className={ContactsScss.contact_email}>
							<h4 className={ContactsScss.contact_subtitle}>
								E-mail
							</h4>
							<Link href="info@imao.uz">
								<a className={ContactsScss.contact_emailaddres}>
									info@imao.uz
								</a>
							</Link>
						</span>
						<span className={ContactsScss.contact_networkicons}>
							<button
								className={ContactsScss.contact_networkicon_1}>
								<Image src={YoutubeIcon} alt="YoutubeIcon" />
							</button>
							<button
								className={ContactsScss.contact_networkicon_2}>
								<Image src={TelegramIcon} alt="TelegramIcon" />
							</button>
							<button
								className={ContactsScss.contact_networkicon_3}>
								<Image src={FacebookIcon} alt="FacebookIcon" />
							</button>
							<button
								className={ContactsScss.contact_networkicon_4}>
								<Image
									src={InstagramIcon}
									alt="InstagramIcon"
								/>
							</button>
						</span>
					</li>
				</ul>
				<span className={ContactsScss.contact_mapimg}>
					<Image src={MapImg} width="1030" height="400" />
				</span>
			</div>
		</>
	);
}
export default Contacts;
