/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from '../Footer.module.css';
import PaymentLogo from '../Assets/image/payment_category.png';
import DeliveryLogo from '../Assets/image/delivery_logo.png';

const Payment = () => {
    return (
        <>
            <div className={`${clsx(styles.payment_container)}`}>
                <p className={`${clsx(styles.footer_title)}`}>Phương thức thanh toán</p>
                <ul className={`${clsx(styles.footer_list_group)}`}>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <img src={PaymentLogo} alt="" className={`${clsx(styles.payment_image_logo)}`}/>
                    </li>
                </ul>
                <p className={`${clsx(styles.footer_title)}`}>Dịch vụ giao hàng</p>
                <ul className={`${clsx(styles.footer_list_group)} d-flex justify-content-start`}>
                    <li className={`${clsx(styles.footer_list_item)}`}>
                        <a rel="noopener" href="https://tikinow.biz?src=footer" className={`${clsx(styles.link)}`}>
                            <img src={DeliveryLogo} alt="" className={`${clsx(styles.payment_image_delivery)}`}/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Payment;