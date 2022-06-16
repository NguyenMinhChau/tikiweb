/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import {Row, Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Counpon.module.css';
import Trend1 from './Assets/image/trend01.png';
import Trend2 from './Assets/image/trend02.png';
import Trend3 from './Assets/image/trend03.png';
const CounponTrendingMobile = () => {
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
            <div className={`${clsx(styles.counpon_container, styles.counpontrend_mobile_container)}`}>
                <Row>
                <Carousel autoPlay infinite responsive={responsive} className={`${clsx(styles.slider_lage)}`}>
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
                </Carousel>
                </Row>
            </div>
        </>
    )
}
export default CounponTrendingMobile;