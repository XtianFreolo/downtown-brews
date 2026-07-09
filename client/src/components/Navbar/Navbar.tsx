import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <header className={styles.navbar}>
            <a href="/" className={styles.logo}>
                Downtown Brews
            </a>

            <nav className={styles.links}>
                <a href="#menu">Menu</a>
                <a href="#beer-wine">Beer & Wine</a>
                <a href="#about">About</a>
                <a href="#hours">Hours</a>
            </nav>

            <a href="#menu" className={styles.cta}>
                Explore Menu
            </a>
        </header>
    );
}

export default Navbar;