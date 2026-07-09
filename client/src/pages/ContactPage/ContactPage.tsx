import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./ContactPage.module.css";

function ContactPage() {
    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>
                <p className={styles.eyebrow}>Contact</p>
                <h1>Visit Downtown Brews</h1>
                <p>
                    This page will eventually have a real contact form connected to the backend.
                </p>
            </main>

            <Footer />
        </div>
    );
}

export default ContactPage;