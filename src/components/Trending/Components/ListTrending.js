/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Trending.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1a from '../Assets/image/trend1a.png';
import Image1b from '../Assets/image/trend1b.png';
import Image2a from '../Assets/image/trend2a.png';
import Image2b from '../Assets/image/trend2b.png';
import Image3a from '../Assets/image/trend3a.png';
import Image3b from '../Assets/image/trend3b.png';
import Image4a from '../Assets/image/trend4a.png';
import Image4b from '../Assets/image/trend4b.png';
import Image5a from '../Assets/image/trend5a.png';
import Image5b from '../Assets/image/trend5b.png';
import Image6a from '../Assets/image/trend6a.png';
import Image6b from '../Assets/image/trend6b.png';
import Image7a from '../Assets/image/trend7a.png';
import Image7b from '../Assets/image/trend7b.png';
import Image8a from '../Assets/image/trend8a.png';
import Image8b from '../Assets/image/trend8b.png';
const ListTrending = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
            <Carousel responsive={responsive} className={`${clsx(styles.slider_trending)}`}>
                <a href="#" className={`${clsx(styles.trending_link)}`}>
                    <div className={`${clsx(styles.trending_item)}`}>
                            <p className={`${clsx(styles.trending_title)}`}>Sách tư duy - Kỹ năng sống</p>
                            <p className={`${clsx(styles.trending_sales)}`}>Giảm đến 70%</p>
                            <div className={`${clsx(styles.trending_image_container)}`}>
                                <img src={Image1a} alt="" className={`${clsx(styles.trending_image)}`}/>
                                <img src={Image1b} alt="" className={`${clsx(styles.trending_image)}`}/>
                            </div>
                    </div>
                </a>
                <a href="#" className={`${clsx(styles.trending_link)}`}>
                    <div className={`${clsx(styles.trending_item)}`}>
                            <p className={`${clsx(styles.trending_title)}`}>Tiểu thuyết</p>
                            <p className={`${clsx(styles.trending_sales)}`}>Giảm đến 75%</p>
                            <div className={`${clsx(styles.trending_image_container)}`}>
                                <img src={Image2a} alt="" className={`${clsx(styles.trending_image)}`}/>
                                <img src={Image2b} alt="" className={`${clsx(styles.trending_image)}`}/>
                            </div>
                    </div>
                </a>
                <a href="#" className={`${clsx(styles.trending_link)}`}>
                    <div className={`${clsx(styles.trending_item)}`}>
                            <p className={`${clsx(styles.trending_title)}`}>Truyện ngắn - Tản văn - Tạp văn</p>
                            <p className={`${clsx(styles.trending_sales)}`}>Giảm đến 75%</p>
                            <div className={`${clsx(styles.trending_image_container)}`}>
                                <img src={Image3a} alt="" className={`${clsx(styles.trending_image)}`}/>
                                <img src={Image3b} alt="" className={`${clsx(styles.trending_image)}`}/>
                            </div>
                    </div>
                </a>
                <a href="#" className={`${clsx(styles.trending_link)}`}>
                    <div className={`${clsx(styles.trending_item)}`}>
                            <p className={`${clsx(styles.trending_title)}`}>Điện thoại SmartPhone</p>
                            <p className={`${clsx(styles.trending_sales)}`}>Giảm đến 45%</p>
                            <div className={`${clsx(styles.trending_image_container)}`}>
                                <img src={Image4a} alt="" className={`${clsx(styles.trending_image)}`}/>
                                <img src={Image4b} alt="" className={`${clsx(styles.trending_image)}`}/>
                            </div>
                    </div>
                </a>
                <a href="#" className={`${clsx(styles.trending_link)}`}>
                    <div className={`${clsx(styles.trending_item)}`}>
                            <p className={`${clsx(styles.trending_title)}`}>Truyện tranh, Manga, Comic</p>
                            <p className={`${clsx(styles.trending_sales)}`}>Giảm đến 65%</p>
                            <div className={`${clsx(styles.trending_image_container)}`}>
                                <img src={Image5a} alt="" className={`${clsx(styles.trending_image)}`}/>
                                <img src={Image5b} alt="" className={`${clsx(styles.trending_image)}`}/>
                            </div>
                    </div>
                </a>
                <a href="#" className={`${clsx(styles.trending_link)}`}>
                    <div className={`${clsx(styles.trending_item)}`}>
                            <p className={`${clsx(styles.trending_title)}`}>Tác phẩm kinh điển</p>
                            <p className={`${clsx(styles.trending_sales)}`}>Giảm đến 65%</p>
                            <div className={`${clsx(styles.trending_image_container)}`}>
                                <img src={Image6a} alt="" className={`${clsx(styles.trending_image)}`}/>
                                <img src={Image6b} alt="" className={`${clsx(styles.trending_image)}`}/>
                            </div>
                    </div>
                </a>
                <a href="#" className={`${clsx(styles.trending_link)}`}>
                    <div className={`${clsx(styles.trending_item)}`}>
                            <p className={`${clsx(styles.trending_title)}`}>Sách nghệ thuật sống đẹp</p>
                            <p className={`${clsx(styles.trending_sales)}`}>Giảm đến 65%</p>
                            <div className={`${clsx(styles.trending_image_container)}`}>
                                <img src={Image7a} alt="" className={`${clsx(styles.trending_image)}`}/>
                                <img src={Image7b} alt="" className={`${clsx(styles.trending_image)}`}/>
                            </div>
                    </div>
                </a>
                <a href="#" className={`${clsx(styles.trending_link)}`}>
                    <div className={`${clsx(styles.trending_item)}`}>
                            <p className={`${clsx(styles.trending_title)}`}>Sách kỹ năng làm việc</p>
                            <p className={`${clsx(styles.trending_sales)}`}>Giảm đến 53%</p>
                            <div className={`${clsx(styles.trending_image_container)}`}>
                                <img src={Image8a} alt="" className={`${clsx(styles.trending_image)}`}/>
                                <img src={Image8b} alt="" className={`${clsx(styles.trending_image)}`}/>
                            </div>
                    </div>
                </a>
            </Carousel>
        </>
    )
}
export default ListTrending;