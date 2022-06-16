import styles from '../Header.module.css';
import clsx from 'clsx';
import LogoTiki from '../Assets/image/logo_tiki.png';
import Freeship from '../Assets/image/freeship+_tiki.png';
const Logo = () => {
    return (
        <>
            <div className={`${clsx(styles.header_logo_container)}`}>
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
        </>
    )
}
export default Logo;