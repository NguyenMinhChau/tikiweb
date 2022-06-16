/* eslint-disable jsx-a11y/alt-text */
import clsx from "clsx";
import {Row, Col} from 'react-bootstrap';
import styles from './Slider.module.css';
import SliderLage from './PartialSlider/SliderLagre';
import SliderSmall from './PartialSlider/SliderSmall';
const Slider = () => {
    return (
        <>
            <div className={`${clsx(styles.slider_container)}`}>
                <Row>
                    <Col lg={8}>
                        <SliderLage/>
                    </Col>
                    <Col lg={4}>
                        <SliderSmall/>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Slider;