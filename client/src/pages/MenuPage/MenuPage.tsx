import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { featuredMenuItems } from "../../data/menuItems";
import styles from "./MenuPage.module.css";

function MenuPage() {
    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>
                <p className={styles.eyebrow}>Explore More</p>
                <h1>Full Downtown Brews Menu</h1>
                <p className={styles.intro}>
                    Start with our featured favorites, then expand into coffee, ceviches,
                    causas, shareables, sweets, beer, wine, and more.
                </p>

                <section className={styles.grid}>
                    {featuredMenuItems.map((item) => (
                        <article className={styles.card} key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div>
                                <span>{item.category}</span>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default MenuPage;