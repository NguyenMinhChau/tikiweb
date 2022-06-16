/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Brand.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from '../Assets/image/listbrand01.png';
import Image2 from '../Assets/image/listbrand02.png';
import Image3 from '../Assets/image/listbrand03.png';
import Image4 from '../Assets/image/listbrand04.png';
import Image5 from '../Assets/image/listbrand05.png';
import Image6 from '../Assets/image/listbrand06.png';
import Image7 from '../Assets/image/listbrand07.png';
import Image8 from '../Assets/image/listbrand08.png';
import Image9 from '../Assets/image/listbrand09.png';
import Image10 from '../Assets/image/listbrand10.png';
import Image11 from '../Assets/image/listbrand11.png';
import Image12 from '../Assets/image/listbrand12.png';
const ListBrand = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <>
            <Carousel responsive={responsive} className={`${clsx(styles.slider_brand)}`}>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image1} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Giảm 50K cho hóa đơn 500K</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image2} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Giảm đến 50%++</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image3} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Hot deal 12K</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image4} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Giảm đến 60%</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image5} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Mua là có quà</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image6} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Counpon giảm thêm 10%</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image7} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Voucher đến 200K</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image8} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Độc quyền trên tiki</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image9} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Sales đến 50%</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image10} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Giảm đến 50%++</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image11} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Counpon 200K</span>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.brand_list_item)}`}>
                    <a href="#" className={`${clsx(styles.brand_list_link)}`}>
                        <div className={`${clsx(styles.brand_list)}`}>
                            <img src={Image12} alt="" className={`${clsx(styles.brand_list_img)}`} />
                            <span className={`${clsx(styles.brand_list_desc)}`}>Sales đậm đến 65%</span>
                        </div>
                    </a>
                </div>
            </Carousel>
        </>
    )
}
export default ListBrand;