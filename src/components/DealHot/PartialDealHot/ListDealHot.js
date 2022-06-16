/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../DealHot.module.css';
import Product1 from '../Assets/image/product01.png';
import Product2 from '../Assets/image/product02.png';
import Product3 from '../Assets/image/product03.png';
import Product4 from '../Assets/image/product04.png';
import Product5 from '../Assets/image/product05.png';
import Product6 from '../Assets/image/product06.png';
import Product7 from '../Assets/image/product07.png';
import Product8 from '../Assets/image/product08.png';
import Product9 from '../Assets/image/product09.png';
import Product10 from '../Assets/image/product10.png';
const ListDealHot = () => {
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
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive} className={`${clsx(styles.slider_dealhot)}`}>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product1} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>1.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>1.500.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '20%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product2} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>2.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>2.200.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '90%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Sắp hết hàng</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product3} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>1.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>1.300.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '10%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product4} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>1.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>1.200.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '50%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product5} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>3.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>3.200.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '70%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product6} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>3.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>3.200.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '75%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product7} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>5.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>5.200.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '65%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product8} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>3.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>3.200.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '70%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product9} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>2.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>2.200.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '55%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
                <div className={`${clsx(styles.dealhot_list_item)}`}>
                    <a href="#" className={`${clsx(styles.dealhot_list_link)}`}>
                        <div className={`${clsx(styles.dealhot_list_item_image)}`}>
                            <img src={Product10} alt="" className={`${clsx(styles.dealhot_list_image)}`}/>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_price)}`}>
                            <span className={`${clsx(styles.dealhot_list_item_price_new)}`}>2.000.000 đ</span>
                            <span className={`${clsx(styles.dealhot_list_item_price_old)}`}>2.300.000 đ</span>
                        </div>
                        <div className={`${clsx(styles.dealhot_list_item_progress)}`}>
                            <div style={{width: '88%'}} className={`${clsx(styles.dealhot_list_item_progress_bar)}`}></div>
                            <span className={`${clsx(styles.dealhot_list_item_progress_text)}`}>Vừa mở bán</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="Dealhot" className={`${clsx(styles.dealhot_progress_image)}`}/>
                        </div>
                    </a>
                </div>
            </Carousel>
        </>
    )
}
export default ListDealHot;