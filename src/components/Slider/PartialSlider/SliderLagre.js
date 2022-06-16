/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../Slider.module.css';
import Slider1 from '../Assets/image/slider01.png'
import Slider2 from '../Assets/image/slider02.png'
import Slider3 from '../Assets/image/slider03.png'
import Slider4 from '../Assets/image/slider04.png'
import Slider5 from '../Assets/image/slider05.png'
import Slider6 from '../Assets/image/slider06.png'
import Slider7 from '../Assets/image/slider07.png'
import Slider8 from '../Assets/image/slider08.png'
const SliderLage = () => {
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
            <Carousel autoPlay infinite responsive={responsive} className={`${clsx(styles.slider_lage)}`}>
                    <div className={`${clsx(styles.splide__slide)}`}>
                        <a href="#" className={`${clsx(styles.splide__link)}`}>
                            <img className={`${clsx(styles.slider_image)}`} src={Slider1}/>
                        </a>
                    </div>
                    <div class={`${clsx(styles.splide__slide)}`}>
                        <a href="#" className={`${clsx(styles.splide__link)}`}>
                            <img className={`${clsx(styles.slider_image)}`} src={Slider2}/>
                        </a>
                    </div>
                    <div class={`${clsx(styles.splide__slide)}`}>
                        <a href="#" className={`${clsx(styles.splide__link)}`}>
                            <img className={`${clsx(styles.slider_image)}`} src={Slider3}/>
                        </a>
                    </div>
                    <div class={`${clsx(styles.splide__slide)}`}>
                        <a href="#" className={`${clsx(styles.splide__link)}`}>
                            <img className={`${clsx(styles.slider_image)}`} src={Slider4}/>
                        </a>
                    </div>
                    <div class={`${clsx(styles.splide__slide)}`}>
                        <a href="#" className={`${clsx(styles.splide__link)}`}>
                            <img className={`${clsx(styles.slider_image)}`} src={Slider5}/>
                        </a>
                    </div>
                    <div class={`${clsx(styles.splide__slide)}`}>
                        <a href="#" className={`${clsx(styles.splide__link)}`}>
                            <img className={`${clsx(styles.slider_image)}`} src={Slider6}/>
                        </a>
                    </div>
                    <div class={`${clsx(styles.splide__slide)}`}>
                        <a href="#" className={`${clsx(styles.splide__link)}`}>
                            <img className={`${clsx(styles.slider_image)}`} src={Slider7}/>
                        </a>
                    </div>
                    <div class={`${clsx(styles.splide__slide)}`}>
                        <a href="#" className={`${clsx(styles.splide__link)}`}>
                            <img className={`${clsx(styles.slider_image)}`} src={Slider8}/>
                        </a>
                    </div>
            </Carousel>
        </>
    )
}
export default SliderLage;