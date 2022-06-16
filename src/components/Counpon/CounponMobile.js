/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import {Row, Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Counpon.module.css';
import Counpon1 from './Assets/image/counpon01.png';
import Counpon2 from './Assets/image/counpon02.png';
import Counpon3 from './Assets/image/counpon03.png';
import Counpon4 from './Assets/image/counpon04.png';
const CounponMobile = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className={`${clsx(styles.counpon_mobile_container)}`}>
                <div className={`${clsx(styles.counpon_container)}`}>
                    <Row>
                        <Carousel autoPlay infinite responsive={responsive} className={`${clsx(styles.slider_lage)}`}>
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
                        </Carousel>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default CounponMobile;