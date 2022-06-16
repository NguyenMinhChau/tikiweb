/* eslint-disable jsx-a11y/anchor-is-valid */
import {Row, Col} from 'react-bootstrap';
import styles from '../Header.module.css';
import clsx from 'clsx';
import AvatarUser from '../Assets/image/avatar_user.jfif';
const User = () => {
    return (
        <>
            <div className={`${clsx(styles.header_user_container)}`}>
                <Row>
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
        </>
    )
}
export default User;