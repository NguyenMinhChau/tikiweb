/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Today.module.css';
import Image1 from '../Assets/image/today01.png';
import Image2 from '../Assets/image/today02.png';
import Image3 from '../Assets/image/today03.png';
import Image4 from '../Assets/image/today04.png';
import Image5 from '../Assets/image/today05.png';
import Image6 from '../Assets/image/today06.png';
import Image7 from '../Assets/image/today07.png';
import Image8 from '../Assets/image/today08.png';
const ListToday = () => {
    return (
        <>
            <div className={`${clsx(styles.listoday_group_container)}`}>
                <ul className={`${clsx(styles.listToday_group)}`}>
                    <li className={`${clsx(styles.listToday_item, styles.active)}`}>
                        <a href="#" className={`${clsx(styles.listToday_link)}`}>
                                <div className={`${clsx(styles.listToday_item_container)}`}>
                                    <img src={Image1} alt="" className={`${clsx(styles.listToday_image)}`}/>
                                    <span className={`${clsx(styles.listToday_text)}`}>Dành cho bạn</span>
                                </div>
                        </a>
                    </li>
                    <li className={`${clsx(styles.listToday_item)}`}>
                        <a href="#" className={`${clsx(styles.listToday_link)}`}>
                            <div className={`${clsx(styles.listToday_item_container)}`}>
                                <img src={Image2} alt="" className={`${clsx(styles.listToday_image)}`}/>
                                <span className={`${clsx(styles.listToday_text)}`}>Điện máy -70%</span>
                            </div>
                        </a>
                    </li>
                    <li className={`${clsx(styles.listToday_item)}`}>
                        <a href="#" className={`${clsx(styles.listToday_link)}`}>
                            <div className={`${clsx(styles.listToday_item_container)}`}>
                                <img src={Image3} alt="" className={`${clsx(styles.listToday_image)}`}/>
                                <span className={`${clsx(styles.listToday_text)}`}>Deal siêu hot</span>
                            </div>
                        </a>
                    </li>
                    <li className={`${clsx(styles.listToday_item)}`}>
                        <a href="#" className={`${clsx(styles.listToday_link)}`}>
                            <div className={`${clsx(styles.listToday_item_container)}`}>
                                <img src={Image4} alt="" className={`${clsx(styles.listToday_image)}`}/>
                                <span className={`${clsx(styles.listToday_text)}`}>Rẻ vô đối</span>
                            </div>
                        </a>
                    </li>
                    <li className={`${clsx(styles.listToday_item)}`}>
                        <a href="#" className={`${clsx(styles.listToday_link)}`}>
                            <div className={`${clsx(styles.listToday_item_container)}`}>
                                <img src={Image5} alt="" className={`${clsx(styles.listToday_image)}`}/>
                                <span className={`${clsx(styles.listToday_text)}`}>Đi chợ siêu sale</span>
                            </div>
                        </a>
                    </li>
                    <li className={`${clsx(styles.listToday_item)}`}>
                        <a href="#" className={`${clsx(styles.listToday_link)}`}>
                            <div className={`${clsx(styles.listToday_item_container)}`}>
                                <img src={Image6} alt="" className={`${clsx(styles.listToday_image)}`}/>
                                <span className={`${clsx(styles.listToday_text)}`}>Hàng mới</span>
                            </div>
                        </a>
                    </li>
                    <li className={`${clsx(styles.listToday_item)}`}>
                        <a href="#" className={`${clsx(styles.listToday_link)}`}>
                            <div className={`${clsx(styles.listToday_item_container)}`}>
                                <img src={Image7} alt="" className={`${clsx(styles.listToday_image)}`}/>
                                <span className={`${clsx(styles.listToday_text)}`}>Xu hướng thời trang</span>
                            </div>
                        </a>
                    </li>
                    <li className={`${clsx(styles.listToday_item)}`}>
                        <a href="#" className={`${clsx(styles.listToday_link)}`}>
                            <div className={`${clsx(styles.listToday_item_container)}`}>
                                <img src={Image8} alt="" className={`${clsx(styles.listToday_image)}`}/>
                                <span className={`${clsx(styles.listToday_text)}`}>Không giới hạn</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default ListToday;