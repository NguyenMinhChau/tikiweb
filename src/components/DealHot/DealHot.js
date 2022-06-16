import clsx from 'clsx';
import styles from './DealHot.module.css';
import Header from './PartialDealHot/Header';
import ListDealHot from './PartialDealHot/ListDealHot';
const DealHot = () => {
    return (
        <>
                <div className={`${clsx(styles.dealhot_container)}`}>
                        <Header/>
                        <ListDealHot/>
                </div>
        </>
    )
}
export default DealHot;