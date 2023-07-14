import styles from './Blog.module.css'
import Container from '../Container/Container';
import divan from '../../images/divan.png'

function Blog() {
    return (
    <Container>
        <section className={styles.Blog}>
            <div className={styles.Blog__slide}>
                <div className={styles.Slide__card}>
                    <div className={styles.Card__back}>
                        <img className={styles.Card__img} src={divan} alt="" />
                    </div>
                    <div className={styles.Card__info}>
                        <div className={styles.Info__deal}><p className={styles.deal__text}>DEAL OF THE WEEK</p></div>
                        <h3 className={styles.info__title}>from <span>$99.99</span></h3>
                        <p className={styles.info__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.</p>
                        <button className={styles.info__btn}>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </section>
    </Container>
    )
}


export default Blog;