import clsx from 'clsx';
import styles from './Footer.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import Helper from './Components/Helper';
import About from './/Components/About';
import Payment from './Components/Payment';
import Connect from './Components/Connect';
import Cooperator from './Components/Cooperate';

const Footer = () => {
    return (
        <>
            <div className={`${clsx(styles.footer_container)}`}>
                <Container>
                    <Row>
                        <Col lg={3} className={`${clsx(styles.item_container)}`}>
                            <Helper />
                        </Col>
                        <Col lg={2} className={`${clsx(styles.item_container)}`}>
                            <About />
                        </Col>
                        <Col lg={2} className={`${clsx(styles.item_container)}`}>
                            <Cooperator />
                        </Col>
                        <Col lg={2} className={`${clsx(styles.item_container)}`}>
                            <Payment />
                        </Col>
                        <Col lg={3} className={`${clsx(styles.item_container)}`}>
                            <Connect />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;