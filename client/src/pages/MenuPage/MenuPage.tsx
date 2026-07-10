import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./MenuPage.module.css";

function MenuPage() {
    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>
                <section className={styles.header}>
                    <p className={styles.eyebrow}>Explore More</p>
                    <h1>Downtown Brews Menu</h1>
                    <p>
                        View our current menu below. The menu can be updated anytime by
                        replacing the PDF file.
                    </p>
                </section>

                <section className={styles.menuViewer}>
                    <iframe
                        src="/menu/downtown-brews-menu.pdf"
                        title="Downtown Brews Menu PDF"
                        className={styles.pdf}
                    />
                </section>

                <div className={styles.actions}>
                    <a href="/menu/downtown-brews-menu.pdf" className={styles.button} target="_blank">
                        Open Menu PDF
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default MenuPage;