/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import {Row, Col} from 'react-bootstrap';
import styles from './Counpon.module.css';
import Trend1 from './Assets/image/trend01.png';
import Trend2 from './Assets/image/trend02.png';
import Trend3 from './Assets/image/trend03.png';
const CounponTrending = () => {
    return (
        <>
            <div className={`${clsx(styles.counpon_container,styles.counpontrend_pc_container)}`}>
                <Row>
                    <Col lg={4}>
                        <a href="#" className={`${clsx(styles.counpon_link)}`}>
                            <img src={Trend1} alt="" className={`${clsx(styles.counpon_image)}`}/>
                        </a>
                    </Col>
                    <Col lg={4}>
                        <a href="#" className={`${clsx(styles.counpon_link)}`}>
                            <img src={Trend2} alt="" className={`${clsx(styles.counpon_image)}`}/>
                        </a>
                    </Col>
                    <Col lg={4}>
                        <a href="#" className={`${clsx(styles.counpon_link)}`}>
                            <img src={Trend3} alt="" className={`${clsx(styles.counpon_image)}`}/>
                        </a>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default CounponTrending;