/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import {Col} from 'react-bootstrap';
import styles from '../Product.module.css';
import ListCategory from './ListCategory';
import Logo from '../Assets/image/logo_freeship.png';
import Image1 from '../Assets/image/prod01.png';
import Image2 from '../Assets/image/prod02.png';
import Image3 from '../Assets/image/prod03.png';
import Image4 from '../Assets/image/prod04.png';
import Image5 from '../Assets/image/prod05.png';
import Image6 from '../Assets/image/prod06.png';
const ListProduct = () => {
    return (
        <>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image1} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Khăn Lau Bếp Đa Năng, chất liệu dày dặn cao cấp, màu sắc đa dạng</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 1000+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>22.500 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image2} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Bánh Chocopie Hộp 20 Cái (660g)</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 1000+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>82.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image3} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Lốc 4 hộp Sữa Chua Lên Men Tự Nhiên Yomost 170ml</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>29.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image4} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Lốc 4 chua Uống Lên Men Tự Nhiên Dutch Lady Hương Việt Quất Và Bạc Hà 180ml</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>31.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <ListCategory/>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image6} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Thịt ba chỉ bò Mỹ - 500g</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>165.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image1} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Khăn Lau Bếp Đa Năng, chất liệu dày dặn cao cấp, màu sắc đa dạng</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 1000+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>22.500 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image2} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Bánh Chocopie Hộp 20 Cái (660g)</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 1000+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>82.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image3} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Lốc 4 hộp Sữa Chua Lên Men Tự Nhiên Yomost 170ml</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>29.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image4} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Lốc 4 chua Uống Lên Men Tự Nhiên Dutch Lady Hương Việt Quất Và Bạc Hà 180ml</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>31.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image5} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>[HCM] - Nạc vai bò Úc Lúc Lắc 300g - giao nhanh</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>95.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image6} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Thịt ba chỉ bò Mỹ - 500g</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>165.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image2} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Bánh Chocopie Hộp 20 Cái (660g)</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 1000+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>82.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image3} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Lốc 4 hộp Sữa Chua Lên Men Tự Nhiên Yomost 170ml</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>29.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image4} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Lốc 4 chua Uống Lên Men Tự Nhiên Dutch Lady Hương Việt Quất Và Bạc Hà 180ml</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>31.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image5} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>[HCM] - Nạc vai bò Úc Lúc Lắc 300g - giao nhanh</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>95.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col lg={2} md={4} className={`${clsx(styles.col_container)}`}>
                <a href="#" className={`${clsx(styles.product_link)}`}>
                    <div className={`${clsx(styles.product_item_container)}`}>
                        <div className={`${clsx(styles.product_item_image_conatainer)}`}>
                            <img src={Image6} alt="" className={`${clsx(styles.product_item_image)}`}/>
                            <img src={Logo} alt="" className={`${clsx(styles.product_item_image_logo)}`}/>
                        </div>
                        <div className={`${clsx(styles.product_desc)}`}>
                            <div className={`${clsx(styles.product_item_title)}`}>Thịt ba chỉ bò Mỹ - 500g</div>
                            <div className={`${clsx(styles.price_container)}`}>
                                <div className={`${clsx(styles.product_item_vote)}`}>
                                    <div className={`${clsx(styles.product_item_vote_star)}`}>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star, styles.yellows)} fas fa-star`}></i>
                                        <i className={`${clsx(styles.icon_star)} fas fa-star`}></i>
                                    </div>
                                    <span className={`${clsx(styles.product_item_vote_count)}`}>Đã bán 100+</span>
                                </div>
                                <div className={`${clsx(styles.product_item_price)}`}>165.000 đ</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
        </>
    )
}
export default ListProduct;