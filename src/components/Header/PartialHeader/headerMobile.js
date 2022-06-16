/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Header.module.css';
import {Row,Col} from 'react-bootstrap';
import LogoTiki from '../Assets/image/logo_tiki.png';
import Freeship from '../Assets/image/freeship+_tiki.png';
import AvatarUser from '../Assets/image/avatar_user.jfif';
const HeaderMobile = () => {
    return (
        <>
            <Row className="d-flex flex-nowrap col-3 mr-0px">
                <Col lg={4}>
                    <div className={`${clsx(styles.header_user_containe)}`}>
                        <Row className="d-flex flex-direction-row text-center">
                            <Col lg={2}>
                                <div className={`${styles.header_user__avatar}`}>
                                    <a href="#"><img src={AvatarUser} alt="avatar" className={`${styles.user__avatar}`}/></a>
                                </div>
                            </Col>
                            <Col lg={10}>
                                <div className={`${styles.header_user__register}`}>
                                    <span>
                                        <a href="#" className={`${styles.user__signin__link}`}>Đăng nhập</a>
                                    </span>/<span>
                                        <a href="#" className={`${styles.user__signup__link}`}>Đăng ký</a>
                                    </span>
                                </div>
                                <div className={`${styles.header_user__account}`}>
                                    Tài khoản <i class="fas fa-sort-down"></i>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} className="text-center">
                    <div className={`${clsx(styles.header_logo_containe)}`}>
                        <div className="header-logo">
                            <a href="/" className="header-logo__link">
                                <img className={clsx(styles.header_logo__logo)} src={LogoTiki} alt='Logo Tiki'/>
                            </a>
                        </div>
                        <div className="header-freeship">
                            <a href="/" className="header-freeship__link">
                                <img className={clsx(styles.header_freeship__logo)} src={Freeship} alt='Free Ship'/>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className={`${styles.header_cart__containe}d-flex flex-direction-row text-center`}>
                        <div className={`${styles.header_cart} mbt-7px`}>
                            <a href="#" className={`${styles.header_cart__icon}`}>
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                            <span className={`${styles.header_cart__quantity}`}>3</span>
                        </div>
                        <div className={`${styles.header_cart__shop}`}>
                            <a href="#" className={`${styles.cart__shop}`}>
                                <i class="fas fa-store-alt"></i> Bán hàng cùng Tiki
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default HeaderMobile;