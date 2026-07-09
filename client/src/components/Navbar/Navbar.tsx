import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <header className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                Downtown Brews
            </Link>

            <nav className={styles.links}>
                <Link to="/menu">Menu</Link>
                <Link to="/beer-wine">Beer & Wine</Link>
                <a href="/#about">About</a>
                <a href="/#hours">Hours</a>
            </nav>

            <Link to="/menu" className={styles.cta}>
                Explore Menu
            </Link>
        </header>
    );
}

export default Navbar;