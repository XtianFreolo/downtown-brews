import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.text}>
                <p className={styles.eyebrow}>Our Flavor</p>

                <h2>Peruvian-Filipino inspired, made downtown friendly.</h2>

                <p>
                    A cozy neighborhood café inspired by Peruvian flavor,
                    Filipino soul, and the comfort of great coffee,
                    great food, beer, wine, and great company.

                </p>
            </div>

            <div className={styles.card}>
                <h3>What to expect</h3>

                <ul>
                    <li>Brews Yellow buttons and warm cream backgrounds</li>
                    <li>Brown accents inspired by roasted coffee</li>
                    <li>Focused menu sections instead of overwhelming choices</li>
                    <li>Beer and wine promoted clearly on the homepage</li>
                </ul>
            </div>
        </section>
    );
}

export default About;