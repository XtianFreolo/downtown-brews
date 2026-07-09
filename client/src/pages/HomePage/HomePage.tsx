import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.page}>
            <Navbar />
            <Hero />
        </div>
    );
}

export default HomePage;
