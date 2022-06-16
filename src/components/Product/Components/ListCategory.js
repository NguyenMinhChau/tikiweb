/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import {Col} from 'react-bootstrap';
import styles from '../Product.module.css';
import Image1 from '../Assets/image/cate01.png';
import Image2 from '../Assets/image/cate02.png';
import Image3 from '../Assets/image/cate03.png';
import Image4 from '../Assets/image/cate04.png';
const ListCategory = () => {
    return (
        <>
            <Col lg={2} md={4}>
                <div className={`${clsx(styles.listCategory_container)}`}>
                    <p className={`${clsx(styles.listCategory_title)}`}>
                        Danh mục nổi bật
                    </p>
                    <ul className={`${clsx(styles.listCategory_list)}`}>
                        <li className={`${clsx(styles.listCategory_item)}`}>
                            <a href="#" className={`${clsx(styles.listCategory_link)}`}>
                                <img src={Image1} alt="" className={`${clsx(styles.listCategory_image)}`}/>
                                <span className={`${clsx(styles.listCategory_name)}`}>Sửa chữa nhà cửa</span>
                            </a>
                        </li>
                        <li className={`${clsx(styles.listCategory_item)}`}>
                            <a href="#" className={`${clsx(styles.listCategory_link)}`}>
                                <img src={Image2} alt="" className={`${clsx(styles.listCategory_image)}`}/>
                                <div className={`${clsx(styles.listCategory_name)}`}>Ống kính, ống ngắm</div>
                            </a>
                        </li>
                        <li className={`${clsx(styles.listCategory_item)}`}>
                            <a href="#" className={`${clsx(styles.listCategory_link)}`}>
                                <img src={Image3} alt="" className={`${clsx(styles.listCategory_image)}`}/>
                                <span className={`${clsx(styles.listCategory_name)}`}>Cá, thủy hải sản</span>
                            </a>
                        </li>
                        <li className={`${clsx(styles.listCategory_item)}`}>
                            <a href="#" className={`${clsx(styles.listCategory_link)}`}>
                                <img src={Image4} alt="" className={`${clsx(styles.listCategory_image)}`}/>
                                <span className={`${clsx(styles.listCategory_name)}`}>Áo liền quần - Trang phục</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
        </>
    )
}
export default ListCategory;