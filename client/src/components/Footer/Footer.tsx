import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Downtown Brews</h2>
                <p>Peruvian Filipino inspired cafe, beer, and wine. Tara na!</p>
            </div>

            <div className={styles.links}>
                <a href="#menu">Menu</a>
                <a href="#beer-wine">Beer & Wine</a>
                <a href="#about">About</a>
                <a href="#hours">Hours</a>
            </div>
        </footer>
    );
}

export default Footer;