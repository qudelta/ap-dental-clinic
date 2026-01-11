import { motion } from 'framer-motion';
import styles from './ClinicEnvironment.module.scss';
import { Link } from 'react-router-dom';

const photos = [
    { label: 'Reception Desk', delay: 0 },
    { label: 'Consultation Room', delay: 0.1 },
    { label: 'Patient Waiting Area', delay: 0.2 },
    { label: 'Clinic Exterior', delay: 0.3 },
];

const ClinicEnvironment = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>A Calm, Clinical Environment</h2>
                    <p className={styles.subheading}>Designed to reduce anxiety and ensure safety.</p>
                </div>

                <div className={styles.grid}>
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            className={styles.photoCard}
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: photo.delay, duration: 0.4 }}
                        >
                            <div className={styles.placeholder}>
                                {photo.label}
                            </div>
                            <div className={styles.caption}>{photo.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link to="/gallery" className="btn btn-outline">View Full Gallery</Link>
                </div>
            </div>
        </section>
    );
};

export default ClinicEnvironment;
