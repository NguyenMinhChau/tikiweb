import {Row, Col} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './Brand.module.css';
import Slider from './components/Slider';
import ListBrand from './components/ListBrand';
import Logo from './Assets/image/logo_brand.png';
const Brand = () => {
    return (
        <>
            <div className={`${clsx(styles.brand_container)}`}>
                <Row>
                    <Col lg={12} className={`${clsx(styles.logo_container)}`}>
                        <img src={Logo} alt="" className={`${clsx(styles.logo_brand)}`} />
                        <span className={`${clsx(styles.logo_title)}`}>Thương hiệu chính hãng</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Slider/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <ListBrand/>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Brand;