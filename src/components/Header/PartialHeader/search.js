/* eslint-disable jsx-a11y/anchor-is-valid */
import {Row, Col} from 'react-bootstrap';
import clsx from 'clsx';
import styles from '../Header.module.css';
const Search = () => {
    return (
        <>
            <div className={`${clsx(styles.header_search_container)}`}>
                <Row className="d-dlex">
                    <Col lg={9} className="pr-0px">
                        <input type="text" className={`${clsx(styles.search)}`} placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."/>
                    </Col>
                    <Col lg={3} className="pl-0px">
                        <button className={`btn ${styles.btn_search}`}>
                            <i className="fas fa-search"></i> Tìm kiếm
                        </button>
                    </Col>
                </Row>
                <div className={`${clsx(styles.header_search__lists)}`}>
                    <Row>
                        <Col lg={12}>
                            <ul className={`${styles.header_list_group} d-flex pl-0px`}>
                                <li className={`${clsx(styles.header_list_group__item)}`}>
                                    <a href="#" className={`${styles.header_list_group__link}`}>Trái cây</a>
                                </li>
                                <li className={`${clsx(styles.header_list_group__item)}`}>
                                    <a href="#" className={`${styles.header_list_group__link}`}>Thịt, trứng</a>
                                </li>
                                <li className={`${clsx(styles.header_list_group__item)}`}>
                                    <a href="#" className={`${styles.header_list_group__link}`}>Rau, củ, quả</a>
                                </li>
                                <li className={`${clsx(styles.header_list_group__item)}`}>
                                    <a href="#" className={`${styles.header_list_group__link}`}>Sữa,
                                    bơ, phô mai</a>
                                </li>
                                <li className={`${clsx(styles.header_list_group__item)}`}>
                                    <a href="#" className={`${styles.header_list_group__link}`}>Hải sản</a>
                                </li>
                                <li className={`${clsx(styles.header_list_group__item)}`}>
                                    <a href="#" className={`${styles.header_list_group__link}`}>Gạo, mì ăn liền</a>
                                </li>
                                <li className={`${clsx(styles.header_list_group__item)}`}>
                                    <a href="#" className={`${styles.header_list_group__link}`}>Đồ uống, bia rượu</a>
                                </li>
                                <li className={`${clsx(styles.header_list_group__item)}`}>
                                    <a href="#" className={`${styles.header_list_group__link}`}>Bánh kẹo</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Search;