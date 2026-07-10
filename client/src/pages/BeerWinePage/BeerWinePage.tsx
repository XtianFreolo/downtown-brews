import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./BeerWinePage.module.css";

function BeerWinePage() {
    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div>
                        <p className={styles.eyebrow}>Now Serving</p>
                        <h1>Beer & Wine</h1>
                        <p>
                            Downtown Brews is not just coffee. Enjoy draft beer, wine pours,
                            cafe nights, and Filipino favorites like Red Horse.
                        </p>
                    </div>

                    <div className={styles.imageCard}>
                        <img src="/images/red-horse.jpg" alt="Red Horse beer bottle" />
                    </div>
                </section>

                <section className={styles.listSection}>
                    <article>
                        <h2>Beer</h2>
                        <ul>
                            <li>Local draft beer</li>
                            <li>Red Horse</li>
                            <li>Rotating seasonal cans</li>
                        </ul>
                    </article>

                    <article>
                        <h2>Wine</h2>
                        <ul>
                            <li>House red</li>
                            <li>House white</li>
                            <li>Sparkling wine</li>
                        </ul>
                    </article>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default BeerWinePage