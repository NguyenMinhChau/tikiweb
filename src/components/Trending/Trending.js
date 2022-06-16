import clsx from 'clsx';
import styles from './Trending.module.css';
import {Row, Col} from 'react-bootstrap';
import ListTrending from './Components/ListTrending';
import Logo from './Assets/image/trending_logo.png';
const Trending = () =>{
    return (
        <>
            <div className={`${clsx(styles.trending_container)}`}>
                <Row className={`${clsx(styles.trending_logo_container)}`}>
                    <Col lg={12}>
                        <img src={Logo} alt="" className={`${clsx(styles.trending_logo)}`}/>
                        <span className={`${clsx(styles.trending_header)}`}>Xu hướng mua sắm</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className={`${clsx(styles.list_trending_container)}`}>
                        <ListTrending/>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Trending;