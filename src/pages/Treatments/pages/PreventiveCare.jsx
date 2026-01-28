import styles from './TreatmentDetail.module.scss';
import { Link } from 'react-router-dom';

const PreventiveCare = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero} style={{ backgroundImage: "linear-gradient(rgba(14, 184, 246, 0.8), rgba(0, 78, 146, 0.85)), url('/images/treatments/preventive.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <span className={styles.label}>Treatments</span>
                    <h1>Preventive Care</h1>
                    <p>Proactive protection for a lifetime of healthy smiles.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Prevention is Better Than Cure</h2>
                        <p>The most effective dental treatment is the one you never need. Our preventive program is designed to stop problems like cavities and gum disease before they start.</p>
                    </section>

                    <section className={styles.section}>
                        <h2>What We Offer</h2>

                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/treatments/professional-cleaning.webp" alt="Professional Cleaning" className={styles.cardImage} />
                                </div>
                                <h3>Professional Cleaning (Scaling)</h3>
                                <p>Even with good brushing, plaque can harden into tartar which cannot be removed at home. Regular scaling removes these deposits, keeping your gums healthy and breath fresh.</p>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/treatments/dental-sealants.webp" alt="Dental Sealants" className={styles.cardImage} />
                                </div>
                                <h3>Dental Sealants</h3>
                                <p>A thin, protective coating painted on the chewing surfaces of back teeth (molars). They seal off deep grooves where food gets trapped, significantly reducing the risk of cavities in children and teens.</p>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/treatments/fluoride-therapy.webp" alt="Fluoride Therapy" className={styles.cardImage} />
                                </div>
                                <h3>Fluoride Therapy</h3>
                                <p>Topical fluoride applications strengthen tooth enamel, making it more resistant to acid attacks from plaque bacteria and sugars in the mouth.</p>
                            </div>
                        </div>
                    </section>

                    <div className={styles.cta}>
                        <h3>Protect your family's oral health</h3>
                        <Link to="/contact" className="btn btn-primary">Book a Checkup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreventiveCare;
