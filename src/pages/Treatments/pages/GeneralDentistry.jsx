import styles from './TreatmentDetail.module.scss';
import { Link } from 'react-router-dom';

const GeneralDentistry = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero} style={{ backgroundImage: "linear-gradient(rgba(14, 184, 246, 0.8), rgba(0, 78, 146, 0.85)), url('/images/treatments/general-hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <span className={styles.label}>Treatments</span>
                    <h1>General Dentistry</h1>
                    <p>The foundation of long-term oral health.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Comprehensive Care</h2>
                        <p>General dentistry focuses on preventing and treating common dental issues to preserve your natural teeth for as long as possible. Regular checkups allow us to catch problems early, saving you time, money, and discomfort.</p>
                    </section>

                    <section className={styles.section}>
                        <h2>Services</h2>

                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/treatments/root-canal.webp" alt="Root Canal Diagram" className={styles.cardImage} />
                                </div>
                                <h3>Root Canal Treatment (RCT)</h3>
                                <p>When decay reaches the nerve of the tooth, it causes pain and infection. RCT allows us to save the tooth by removing the infected pulp, cleaning the canal, and sealing it. We use rotary endodontics for a faster, more comfortable experience.</p>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/treatments/composite-fillings.webp" alt="Composite Fillings" className={styles.cardImage} />
                                </div>
                                <h3>Composite Fillings</h3>
                                <p>Gone are the days of silver amalgam. We use high-strength, tooth-colored composite resins to restore decayed teeth. These bond directly to the tooth structure and look completely natural.</p>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/treatments/crowns-bridges.webp" alt="Dental Crowns" className={styles.cardImage} />
                                </div>
                                <h3>Crowns & Bridges</h3>
                                <p>For teeth that are badly damaged or missing, crowns (caps) and bridges provide a durable solution. We offer metal-free Zirconia and E-max crowns for superior aesthetics and strength.</p>
                            </div>
                        </div>
                    </section>

                    <div className={styles.cta}>
                        <h3>Due for a checkup?</h3>
                        <Link to="/contact" className="btn btn-primary">Book Your Visit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralDentistry;
