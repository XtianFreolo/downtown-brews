import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import FeaturedMenu from "../../components/FeaturedMenu/FeaturedMenu";
import BeerWineBanner from "../../components/BeerWineBanner/BeerWineBanner";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.page}>
            <Navbar />
            <Hero />
            <FeaturedMenu />
            <BeerWineBanner />
        </div>
    );
}

export default HomePage;