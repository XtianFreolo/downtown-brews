import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import FeaturedMenu from "../../components/FeaturedMenu/FeaturedMenu";
import BeerWineBanner from "../../components/BeerWineBanner/BeerWineBanner";
import About from "../../components/About/About";
import Hours from "../../components/Hours/Hours";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.page}>
            <Navbar />
            <Hero />
            <FeaturedMenu />
            <BeerWineBanner />
            <About />
            <Hours />
            <Footer />
        </div>
    );
}

export default HomePage;