/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Header.module.css';
import {Row,Col} from 'react-bootstrap';
const SearchMobile = () => {
    return (
        <>  
            <Row className="mt-12px">
                <Col lg={12}>
                    <div className={`${clsx(styles.header_search_containe)}`}>
                        <Row className="mr-0px">
                            <Col lg={9} className="pr-0px col-7">
                                <input type="text" className={`${clsx(styles.search)}`} placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."/>
                            </Col>
                            <Col lg={3} className="pl-0px col-3 pr-0px">
                                <button className={`btn ${styles.btn_search} w-100`}>
                                    <i className="fas fa-search"></i> Tìm kiếm
                                </button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default SearchMobile;