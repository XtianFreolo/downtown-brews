import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <p className={styles.eyebrow}>Peruvian Filipino Inspired Cafe</p>

                <h1>Coffee, ceviches, causas, and shareables in the heart of downtown.</h1>

                <p className={styles.subtitle}>
                    A warm neighborhood cafe with cream tones, brown accents, bold tropical flavor,
                    and a little Brews Yellow energy.
                </p>

                <div className={styles.actions}>
                    <a href="#menu" className={styles.primaryButton}>
                        View Featured Menu
                    </a>

                    <a href="#beer-wine" className={styles.secondaryButton}>
                        Beer & Wine
                    </a>
                </div>
            </div>

            <div className={styles.imageCard}>
                <img src="/images/coffee-hero.jpg" alt="Coffee and cafe table" />
                <div className={styles.badge}>Now serving beer & wine</div>
            </div>
        </section>
    );
}

export default Hero;