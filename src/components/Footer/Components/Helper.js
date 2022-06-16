/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Footer.module.css';

const Helper = () => {
    return (
        <>
            <div className={`${clsx(styles.helper_container)}`}>
                <p className={`${clsx(styles.footer_title)}`}>Hỗ trợ khách hàng</p>
                <ul className={`${clsx(styles.footer_list_group)}`}>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        Hotline: <a href="tel:1900-6035" className={`${clsx(styles.footer_list_link)}`}>1900-6035</a> <p>(1000 đ/phút, 8-21h kể cả T7, CN)</p>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Các câu hỏi thường gặp</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Gửi yêu cầu hỗ trợ</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Hướng dấn đặt hàng</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Phương thức vận chuyển</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Chính sách đổi trả</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Hướng dẫn trả góp</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" className={`${clsx(styles.footer_list_link)}`}>Chính sách hàng nhập khẩu</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        Hỗ trợ khách hàng: <a href="mailto:hotro@tiki.vn" className={`${clsx(styles.footer_list_link)}`}>hotro@tiki.vn</a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        Báo cáo lỗi bảo mật: <a href="mailto:security@tiki.vn" className={`${clsx(styles.footer_list_link)}`}>security@tiki.vn</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Helper;