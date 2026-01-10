import styles from './TreatmentDetail.module.scss';
import { Link } from 'react-router-dom';

const Orthodontics = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <span className={styles.label}>Treatments</span>
                    <h1>Orthodontics</h1>
                    <p>Precision alignment for a confident, healthy smile.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Why Orthodontics?</h2>
                        <p>Orthodontics isn't just about aesthetics; it's about function. Properly aligned teeth are easier to clean, function better for biting and chewing, and contribute to long-term jaw health. at AP Dental, we specialize in diagnosing and treating irregularities of the teeth and face.</p>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Solutions</h2>

                        <div className={styles.card}>
                            <h3>Metal Braces</h3>
                            <p>The traditional and most versatile option. Modern metal braces are smaller and more comfortable than ever. They are highly effective for correcting severe crowding and complex bite issues.</p>
                        </div>

                        <div className={styles.card}>
                            <h3>Ceramic (Clear) Braces</h3>
                            <p>These function like metal braces but are made of clear or tooth-colored ceramic material. They blend in with your teeth, making them a less noticeable option for adults and teens.</p>
                        </div>

                        <div className={styles.card}>
                            <h3>Invisalign (Clear Aligners)</h3>
                            <p>A modern alternative to brackets and wires. Invisalign uses a series of custom-made, clear, removable aligners to gradually shift your teeth. They are virtually invisible and allow you to eat and brush normally.</p>
                        </div>
                    </section>

                    <div className={styles.cta}>
                        <h3>Ready to transform your smile?</h3>
                        <Link to="/contact" className="btn btn-primary">Book an Orthodontic Consultation</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orthodontics;
