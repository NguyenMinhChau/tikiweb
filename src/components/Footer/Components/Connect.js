/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Footer.module.css';
import QRCODE from '../Assets/image/qrcode.png';
import APPSTORE from '../Assets/image/appstore.png';
import PLAYSTORE from '../Assets/image/playstore.png';

const Connect = () => {
    return (
        <>
            <div className={`${clsx(styles.pconnect_container)}`}>
                <p className={`${clsx(styles.footer_title)}`}>Kết nối với chúng tôi</p>
                <ul className={`${clsx(styles.footer_list_group)} d-flex`}>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="https://www.facebook.com/tiki.vn/" rel="noreferrer" className={`${clsx(styles.link)}`}>
                            <i className={`${clsx(styles.facebook_icon)} fab fa-facebook`}></i>
                        </a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="https://www.youtube.com/user/TikiVBlog" rel="noreferrer" className={`${clsx(styles.link)}`}>
                            <i className={`${clsx(styles.youtube_icon)} fab fa-youtube`}></i>
                        </a>
                    </li>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a href="#" rel="noreferrer" className={`${clsx(styles.link)}`}>
                            <i className={`${clsx(styles.instagram_icon)} fab fa-instagram`}></i>
                        </a>
                    </li>
                </ul>
                <p className={`${clsx(styles.footer_title)}`}>Tải ứng dụng trên điện thoại</p>
                <div className={`${clsx(styles.download_container)} d-flex`}>
                    <div className={`${clsx(styles.download_qr_code)}`}>
                        <img src={QRCODE} alt="QR Code" className={`${clsx(styles.qrcode_image)}`}/>
                    </div>
                    <div className={`${clsx(styles.download_app_container)}`}>
                        <div className={`${clsx(styles.download_app_store)}`}>
                            <a href="https://itunes.apple.com/vn/app/id958100553">
                                <img src={APPSTORE} alt="App Store" className={`${clsx(styles.appStore_image)}`}/>
                            </a>
                        </div>
                        <div className={`${clsx(styles.download_app_chplay)}`}>
                            <a href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid">
                                <img src={PLAYSTORE} alt="Play Store" className={`${clsx(styles.playStore_image)}`}/> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Connect;