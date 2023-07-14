import Container from '../Container/Container'; 
import styles from './Offer.module.css';
import img from '../../images/offerImg.png';

function Offer() {
    return (
    <Container>
        <section className={styles.offer}>

        <svg className={styles.offer__arrowLeft} xmlns="http://www.w3.org/2000/svg" width="27" height="53" viewBox="0 0 27 53" fill="none">
          <path d="M0.00819732 26.6316C0.0364472 26.9013 0.152723 27.153 0.338187 27.3466L24.9762 52.626C25.1936 52.86 25.4933 52.9948 25.8086 52.9999C26.1238 53.0049 26.4276 52.8793 26.6516 52.652C26.8755 52.4247 27.0012 52.1143 27 51.7912C26.9988 51.4677 26.8706 51.1585 26.6446 50.9329L2.83039 26.5L26.6446 2.0671L26.6446 2.06668C26.8706 1.8415 26.9988 1.53229 27 1.20881C27.0012 0.885323 26.8755 0.575287 26.6516 0.348004C26.4276 0.120301 26.1238 -0.00489013 25.8086 0.000145266C25.4933 0.00518448 25.1936 0.139626 24.9762 0.37405L0.337137 25.6534C0.0894364 25.9117 -0.0317458 26.2709 0.00714978 26.6314L0.00819732 26.6316Z" fill="#797979"/>
        </svg>

        <img className={styles.offer__image} src={img} alt="" />

        <div className={styles.offer__text}>
            <p className={styles.offer__text_name}>Get ready for Our stylist chair</p>
            <button className={styles.offer__text_button}>SHOP NOW</button>
        </div>

        <svg className={styles.offer__arrowRight} xmlns="http://www.w3.org/2000/svg" width="27" height="53" viewBox="0 0 27 53" fill="none">
            <path d="M26.9918 26.3684C26.9636 26.0987 26.8473 25.847 26.6618 25.6534L2.02377 0.374049C1.80637 0.140044 1.50668 0.00518901 1.19142 0.000144965C0.876171 -0.00489628 0.572386 0.120717 0.348425 0.348C0.124474 0.575283 -0.00121883 0.885743 7.57656e-06 1.20881C0.00123589 1.53229 0.129387 1.8415 0.355381 2.0671L24.1696 26.5L0.355379 50.9329L0.355379 50.9333C0.129385 51.1585 0.0012318 51.4677 5.36553e-06 51.7912C-0.00122298 52.1147 0.124471 52.4247 0.348423 52.652C0.572374 52.8797 0.876169 53.0049 1.19142 52.9999C1.50667 52.9948 1.80637 52.8604 2.02377 52.6259L26.6629 27.3466C26.9106 27.0883 27.0317 26.7291 26.9928 26.3686L26.9918 26.3684Z" fill="#797979"/>
        </svg>

        </section>
    </Container>
    )
}
export default Offer;