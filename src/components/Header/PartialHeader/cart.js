/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from '../Header.module.css';
const Cart = () => {
    return (
        <>
            <div className={`${styles.header_cart__container}`}>
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
        </>
    )
}
export default Cart;