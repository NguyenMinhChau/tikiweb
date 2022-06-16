/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Row, Col} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './Digital.module.css';
import Digital1 from './Assets/image/digital01.png';
import Digital2 from './Assets/image/digital02.png';
import Digital3 from './Assets/image/digital03.png';
import Digital4 from './Assets/image/digital04.png';
import Digital5 from './Assets/image/digital05.png';
import Digital6 from './Assets/image/digital06.png';
import Digital7 from './Assets/image/digital07.png';
import Digital8 from './Assets/image/digital08.png';
import Digital9 from './Assets/image/digital09.png';
import Digital10 from './Assets/image/digital10.png';
const Digital = () => {
    return (
        <>
            <div className={`${clsx(styles.digital_container)}`}>
                <Row>
                    <Col lg={12}>
                        <ul className={`${clsx(styles.list_group)}`}>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital1}/>
                                    <div className={`${clsx(styles.list_title)}`}>Đi chợ online</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital2}/>
                                    <div className={`${clsx(styles.list_title)}`}>Mã giảm giá</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital3}/>
                                    <div className={`${clsx(styles.list_title)}`}>Bảo hiểm Tiki 360</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital4}/>
                                    <div className={`${clsx(styles.list_title)}`}>Dịch vụ & Tiện ích</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital5}/>
                                    <div className={`${clsx(styles.list_title)}`}>Gói hội viên</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital6}/>
                                    <div className={`${clsx(styles.list_title)}`}>Giảm đến 50%</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital7}/>
                                    <div className={`${clsx(styles.list_title)}`}>Hoàn tiền 15%</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital8}/>
                                    <div className={`${clsx(styles.list_title)}`}>Ưu đãi thanh toán</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital9}/>
                                    <div className={`${clsx(styles.list_title)}`}>Hẹn giao & lắp đặt</div>
                                </a>
                            </li>
                            <li className={`${clsx(styles.list_item)}`}>
                                <a href="#" className={`${clsx(styles.list_link)}`}>
                                    <img className={`${clsx(styles.list_image)}`} src={Digital10}/>
                                    <div className={`${clsx(styles.list_title)}`}>The next face</div>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Digital;