/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import {Row, Col} from 'react-bootstrap';
import styles from './Product.module.css';
import ListProduct from './Components/ListProduct';
const Product = () => {
    return (
        <>
            <div className={`${clsx(styles.product_container)}`}>
                <Row>
                    <ListProduct/>
                </Row>
                <Row>
                    <Col lg={12} className={`${clsx(styles.product_link_more_container)}`}>
                        <a className={`${clsx(styles.product_more_link)}`}>Xem Thêm</a>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Product;