/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Footer.module.css';

const About = () => {
    return (
        <>
            <div className={`${clsx(styles.about_container)}`}>
                <p className={`${clsx(styles.footer_title)}`}>Về Tiki</p>
                <ul className={`${clsx(styles.footer_list_group)}`}>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.link)}`}>Giới thiệu Tiki</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Tuyển dụng</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Chính sách bảo mật thanh toán</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Chính sách bảo mật thông tin cá nhân</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Chính sách giải quyết khiếu nại</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Điều khoản sử dụng</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Giới thiệu Tiki Xu</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Tiếp thị liên kết cùng Tiki</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Bán hàng doanh nghiệp</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default About;