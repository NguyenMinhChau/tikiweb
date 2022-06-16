/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from './Category.module.css';
const Category = () => {
    return (
        <>
            <div className={`${clsx(styles.category_container)}`}>
                <ul className={`${styles.group}`}>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Thịt, Rau Củ
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Bách Hóa
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Nhà Cửa
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Điện Tử
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Thiết Bị Số
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Điện Thoại
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Mẹ & Bé
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Làm Đẹp
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Gia Dụng
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Thời Trang Nữ
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Thời Trang Nam
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Giày Nữ
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Túi Nữ
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Giày Nam
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Túi Nam
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Balo & Vali
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Phụ Kiện
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Đồng Hồ
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Laptop
                        </a>
                    </li>
                    <li className={`${styles.group_item}`}>
                        <a href="#" className={`${styles.group_item_link}`}>
                            Thể Thao
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Category;