import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Downtown Brews</h2>
                <p>Peruvian Filipino inspired cafe, beer, and wine.</p>
            </div>

            <div className={styles.links}>
                <Link to="/menu">Menu</Link>
                <Link to="/beer-wine">Beer & Wine</Link>
                <a href="/#about">About</a>
                <a href="/#hours">Hours</a>
            </div>
        </footer>
    );
}

export default Footer;