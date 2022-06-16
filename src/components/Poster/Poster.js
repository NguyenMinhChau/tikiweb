/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Poster.module.css';
import clsx from 'clsx';
import {Row,Col} from 'react-bootstrap';
import Sales1 from './Assets/image/sales01.png';
import Sales2 from './Assets/image/sales02.png';
import Sales3 from './Assets/image/sales03.png';
const Poster = () => {
    return (
        <>
            <div className={`${clsx(styles.poster_pc_container)}`}>
                <Row>
                    <Col lg={2}>
                        <a href="#" className={`${clsx(styles.sales_link)}`}>
                            <img src={Sales1} alt="" className={`${clsx(styles.sales_img_small)}`}/>
                        </a>
                    </Col>
                    <Col lg={8}>
                        <a href="#" className={`${clsx(styles.sales_link)}`}>
                            <img src={Sales2} alt="" className={`${clsx(styles.sales_img_lagre)}`}/>
                        </a>
                    </Col>
                    <Col lg={2}>
                        <a href="#" className={`${clsx(styles.sales_link)}`}>
                            <img src={Sales3} alt="" className={`${clsx(styles.sales_img_small)}`}/>
                        </a>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Poster;