import styles from "./BeerWineBanner.module.css";

function BeerWineBanner() {
    return (
        <section className={styles.banner} id="beer-wine">
            <a href="/beer-wine" className={styles.card}>
                <div className={styles.content}>
                    <p className={styles.eyebrow}>Now Serving</p>
                    <h2>Beer & Wine</h2>
                    <p>
                        Draft beer, wine pours, cafe nights, and Filipino favorites like Red Horse.
                    </p>

                    <span className={styles.button}>View Beer & Wine</span>
                </div>

                <div className={styles.imageWrap}>
                    <img src="/images/bar.jpg" alt="Beer and wine bar" className={styles.barImage} />
                    <img src="/images/red-horse.jpg" alt="Red Horse beer bottle" className={styles.bottleImage} />
                </div>
            </a>
        </section>
    );
}

export default BeerWineBanner;