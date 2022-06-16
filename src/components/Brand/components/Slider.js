/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clsx from 'clsx';
import styles from '../Brand.module.css';
import Slider1 from '../Assets/image/slider01.png'
import Slider2 from '../Assets/image/slider02.png'
import Slider3 from '../Assets/image/slider03.png'
import Slider4 from '../Assets/image/slider04.png'
import Slider5 from '../Assets/image/slider05.png'
import Slider6 from '../Assets/image/slider06.png'
import Slider7 from '../Assets/image/slider07.png'
import Slider8 from '../Assets/image/slider08.png'
import Slider9 from '../Assets/image/slider09.png'
import Slider10 from '../Assets/image/slider10.png'
import Slider11 from '../Assets/image/slider11.png'
import Slider12 from '../Assets/image/slider12.png'
import Slider13 from '../Assets/image/slider13.png'
import Slider14 from '../Assets/image/slider14.png'
import Slider15 from '../Assets/image/slider15.png'
import Slider16 from '../Assets/image/slider16.png'
const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
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
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider2}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider3}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider4}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider5}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider6}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider7}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider8}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider9}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider10}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider11}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider12}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider13}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider14}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider15}/>
                    </a>
                </div>
                <div className={`${clsx(styles.splide__slide)}`}>
                    <a href="#" className={`${clsx(styles.splide__link)}`}>
                        <img className={`${clsx(styles.slider_image)}`} src={Slider16}/>
                    </a>
                </div>
            </Carousel>
        </>
    )
}
export default Slider;