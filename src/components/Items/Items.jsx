import styles from './Items.module.css';
import Container from '../Container/Container';
import lamp from '../../images/lamp.png';
import Clock from '../../images/clock.png';
import tableBl from '../../images/tableBl.png';
import woodClock from '../../images/woodClock.png';
import pillow from '../../images/pillow.png';
import stool from '../../images/table.png';
import woodTable from '../../images/woodTabel.png';


function Offer() {
    return (
        <Container>
            <h4 className={styles.Items__name}>Best Seller Items</h4>
            <section className={styles.Items__box}>
                <div className={styles.cardLineOne}>
                    <div className={styles.card}>
                        <img className={styles.card_img} src={lamp} alt="" />
                        <p className={styles.card_title}>Metal Vintage Pendant</p>
                        <p className={styles.card_description}>$79.00</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src={Clock} alt="" />
                        <p className={styles.card_title}>Klosh Table Clock</p>
                        <p className={styles.card_description}>$99.00</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src={tableBl} alt="" />
                        <p className={styles.card_title}>Arne Dining Chair</p>
                        <p className={styles.card_description}>$350.00</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src={woodClock} alt="" />
                        <p className={styles.card_title}>Klosh Wall Clock</p>
                        <p className={styles.card_description}>$80.00 – $129.00</p>
                    </div>
                </div>
                <div className={styles.cardLineTwo}>
                    <div className={styles.cardBox}>
                        <img className={styles.cardBox__img} src={stool} alt="" />
                        <p className={styles.cardBox__Title}>Modern Outdoor Chair</p>
                        <p className={styles.cardBox__Description}>$79.00</p>
                    </div>
                    <div className={styles.cardBox}>
                        <img className={styles.cardBox__img} src={pillow} alt="" />
                        <p className={styles.cardBox__Title}>Modern Outdoor Chair</p>
                        <p className={styles.cardBox__Description}>$99.00</p>
                    </div>
                    <div className={styles.cardBox}>
                        <img className={styles.cardBox__img} src={woodTable} alt="" />
                        <p className={styles.cardBox__Title}>Modern Outdoor Chair</p>
                        <p className={styles.cardBox__Description}>$499.00</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}
export default Offer;