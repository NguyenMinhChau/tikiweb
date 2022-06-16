/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Poster.module.css';
import clsx from 'clsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Row,Col} from 'react-bootstrap';
import Sales1 from './Assets/image/sales01.png';
import Sales2 from './Assets/image/sales02.png';
import Sales3 from './Assets/image/sales03.png';
const PosterMobile = () => {
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
            <div className={`${clsx(styles.poster_mobile_container)}`}>
                <Row>
                    <Carousel autoPlay infinite responsive={responsive} className={`${clsx(styles.slider_lage)}`}>
                        <Col lg={2}>
                            <a href="#" className={`${clsx(styles.sales_link)}`}>
                                <img src={Sales1} alt="" className={`${clsx(styles.sales_img_small)}`}/>
                            </a>
                        </Col>
                        <Col lg={2}>
                            <a href="#" className={`${clsx(styles.sales_link)}`}>
                                <img src={Sales3} alt="" className={`${clsx(styles.sales_img_small)}`}/>
                            </a>
                        </Col>
                    </Carousel>
                </Row>
            </div>
        </>
    )
}
export default PosterMobile;