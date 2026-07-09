import styles from "./Hours.module.css";

const hours = [
    { day: "Monday - Thursday", time: "7:00 AM - 11:00 PM" },
    { day: "Friday", time: "7:00 AM - 12:00 AM" },
    { day: "Saturday", time: "8:00 AM - 12:00 AM" },
    { day: "Sunday", time: "8:00 AM - 8:00 PM" },
];

function Hours() {
    return (
        <section className={styles.hours} id="hours">
            <div>
                <p className={styles.eyebrow}>Visit Us</p>
                <h2>Open for coffee mornings and beer & wine nights.</h2>
                <p className={styles.note}>
                    Hours are sample placeholder hours for now. Later, we can move these
                    into PostgreSQL and update them from the backend.
                </p>
            </div>

            <div className={styles.hoursCard}>
                {hours.map((item) => (
                    <div className={styles.row} key={item.day}>
                        <span>{item.day}</span>
                        <strong>{item.time}</strong>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hours;