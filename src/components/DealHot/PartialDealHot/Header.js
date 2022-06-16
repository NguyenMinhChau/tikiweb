/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import styles from '../DealHot.module.css'
import GiaSoc from '../Assets/image/giasoc_image.svg'
import FlashIcon from '../Assets/image/dealFlashIcon.svg'
import HomNay from '../Assets/image/hot_image.svg'
const Header = () => {
    return (
        <>
            <div className={`${clsx(styles.dealhot_header)}`}>
                <div className={`${clsx(styles.dealhot_image_container)}`}>
                    <img src={GiaSoc} alt="GiaSoc"/>
                    <img src={FlashIcon} alt="FlashIcon"/>
                    <img src={HomNay} alt="HomNay"/>
                </div>
                <div className={`${clsx(styles.dealhot_times)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_page_link)}`}>
                        <span className={`${clsx(styles.dealhot_hour)}`}>03</span> : <span className={`${clsx(styles.dealhot_minute)}`}>30</span> : <span className={`${clsx(styles.dealhot_second)}`}>00</span> <span className={`${clsx(styles.dealhot_page)}`}><i class="fas fa-chevron-right"></i></span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Header;