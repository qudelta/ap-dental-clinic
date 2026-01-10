import styles from './TreatmentDetail.module.scss';
import { Link } from 'react-router-dom';

const CosmeticDentistry = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <span className={styles.label}>Treatments</span>
                    <h1>Cosmetic Dentistry</h1>
                    <p>Design the smile you've always dreamed of.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Artistry Meets Science</h2>
                        <p>Your smile is often the first thing people notice. Cosmetic dentistry blends artistic principles with clinical precision to enhance the appearance of your teeth and gums.</p>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Services</h2>

                        <div className={styles.card}>
                            <h3>Digital Smile Design (DSD)</h3>
                            <p>We use advanced imaging software to plan your new smile before we even touch a tooth. You can see a simulation of your final result, ensuring it matches your facial features perfectly.</p>
                        </div>

                        <div className={styles.card}>
                            <h3>Ceramic Veneers</h3>
                            <p>Thin, custom-made shells of porcelain designed to cover the front surface of teeth. They effectively mask discoloration, chips, gaps, or minor misalignment.</p>
                        </div>

                        <div className={styles.card}>
                            <h3>Teeth Whitening</h3>
                            <p>Professional in-office whitening can brighten your smile by several shades in just one hour. It's safe, effective, and tailored to your sensitivity levels.</p>
                        </div>
                    </section>

                    <div className={styles.cta}>
                        <h3>Want a brighter smile?</h3>
                        <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CosmeticDentistry;
