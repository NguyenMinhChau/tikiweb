import clsx from 'clsx';
import {Row, Col} from 'react-bootstrap';
import styles from './Today.module.css';
import ListToday from './Components/ListToday';
const Today = () =>{
    return(
        <>
            <div className={`${clsx(styles.today_container)}`}>
                <Row>
                    <Col lg={12}>
                        <div className={`${clsx(styles.today_header)}`}>
                            <span className={`${clsx(styles.today_header_text)}`}>Gợi Ý Hôm Nay</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <ListToday/>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Today;