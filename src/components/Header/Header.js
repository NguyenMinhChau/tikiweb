import clsx from 'clsx';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Logo from './PartialHeader/logo';
import Search from './PartialHeader/search';
import User from './PartialHeader/user';
import Cart from './PartialHeader/cart';
import HeaderMobile from './PartialHeader/headerMobile';
import SearchMobile from './PartialHeader/searchMobile';
const Header = () => {
    return (
        <>
            <div className={clsx(styles.header)}>
            <Container>
                <Row className="pt-18px">
                    <Col lg={2} className={clsx(styles.logo_pc)}>
                        <Logo/>
                    </Col>
                    <Col lg={12} className={clsx(styles.logo_mobile)}>
                        <HeaderMobile/>
                    </Col>
                    <Col lg={7} className={clsx(styles.search_pc)}>
                        <Search/>
                    </Col>
                    <Col lg={12} className={clsx(styles.search_mobile)}>
                        <SearchMobile/>
                    </Col>
                    <Col lg={3}>
                        <Row>
                            <Col lg={6}>
                                <User/>
                            </Col>
                            <Col lg={6}>
                                <Cart/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}
export default Header;