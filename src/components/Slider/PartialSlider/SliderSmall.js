/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx';
import styles from '../Slider.module.css';
import Slider1 from '../Assets/image/slider_small.png'
const SliderSmall = () => {
    return (
        <>
            <div className={`${clsx(styles.splide__track_small)}`}>
                <a href="#" className={`${clsx(styles.splide__track_link)}`}>
                    <img className={`${clsx(styles.slider_image_small)}`} src={Slider1}/>
                </a>
            </div>
        </>
    )
}
export default SliderSmall;