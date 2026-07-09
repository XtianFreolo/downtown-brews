import { featuredMenuItems } from "../../data/menuItems";
import styles from "./FeaturedMenu.module.css";

function FeaturedMenu() {
    return (
        <section className={styles.section} id="menu">
            <div className={styles.header}>
                <p className={styles.eyebrow}>Featured Menu</p>
                <h2>Coffee, ceviches, causas, and shareables.</h2>
                <p>
                    A focused first look at what Downtown Brews does best. Everything else lives under
                    Explore More.
                </p>
            </div>

            <div className={styles.grid}>
                {featuredMenuItems.map((item) => (
                    <article className={styles.card} key={item.id}>
                        <img src={item.image} alt={item.title} />

                        <div className={styles.cardBody}>
                            <span>{item.category}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles.action}>
                <a href="/menu" className={styles.button}>
                    Explore More
                </a>
            </div>
        </section>
    );
}

export default FeaturedMenu;