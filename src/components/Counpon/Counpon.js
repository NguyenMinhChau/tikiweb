/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import {Row, Col} from 'react-bootstrap';
import styles from './Counpon.module.css';
import Counpon1 from './Assets/image/counpon01.png';
import Counpon2 from './Assets/image/counpon02.png';
import Counpon3 from './Assets/image/counpon03.png';
import Counpon4 from './Assets/image/counpon04.png';
const Counpon = () => {
    return (
        <>
            <div className={`${clsx(styles.counpon_pc_container)}`}>
                <div className={`${clsx(styles.counpon_container)}`}>
                    <Row>
                        <Col lg={3}>
                            <a href="#" className={`${clsx(styles.counpon_link)}`}>
                                <img src={Counpon1} alt="" className={`${clsx(styles.counpon_image)}`}/>
                            </a>
                        </Col>
                        <Col lg={3}>
                            <a href="#" className={`${clsx(styles.counpon_link)}`}>
                                <img src={Counpon2} alt="" className={`${clsx(styles.counpon_image)}`}/>
                            </a>
                        </Col>
                        <Col lg={3}>
                            <a href="#" className={`${clsx(styles.counpon_link)}`}>
                                <img src={Counpon3} alt="" className={`${clsx(styles.counpon_image)}`}/>
                            </a>
                        </Col>
                        <Col lg={3}>
                            <a href="#" className={`${clsx(styles.counpon_link)}`}>
                                <img src={Counpon4} alt="" className={`${clsx(styles.counpon_image)}`}/>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Counpon;