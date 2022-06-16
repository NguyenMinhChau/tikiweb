/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Footer.module.css';
import Image1 from '../Assets/image/bo-cong-thuong-logo.png';
import Image2 from '../Assets/image/bo-cong-thuong-svg.svg';

const Cooperator = () => {
    return (
        <>
            <div className={`${clsx(styles.about_container)}`}>
                <p className={`${clsx(styles.footer_title)}`}>Hợp tác và liên kết</p>
                <ul className={`${clsx(styles.footer_list_group)}`}>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.link)}`}>Quy chế hoạt động sàn GDTMDT</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Bán hàng cùng Tiki</a>
                    </li>
                </ul>
                <p className={`${clsx(styles.footer_title)}`}>Chứng nhận bởi</p>
                <ul className={`${clsx(styles.footer_list_group)} d-flex justify-content-start`}>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.link)}`}>
                            <img src={Image1} alt="" className={`${clsx(styles.cooperate_image_logo)}`}/>
                        </a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>
                            <img src={Image2} alt="" className={`${clsx(styles.cooperate_image_svg)}`}/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Cooperator;