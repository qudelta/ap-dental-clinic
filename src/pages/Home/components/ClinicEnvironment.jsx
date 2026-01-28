import { motion } from 'framer-motion';
import styles from './ClinicEnvironment.module.scss';
import { Link } from 'react-router-dom';

const photos = [
    { label: 'Waiting Area', delay: 0, src: '/images/waiting-area.webp' },
    { label: 'Consultation Room', delay: 0.1, src: '/images/consultation-room.webp' },
    { label: 'Modern Equipment', delay: 0.2, src: '/images/equipments.webp' },
    { label: 'Advanced Diagnostics', delay: 0.25, src: '/images/consultation-room-2.webp' },
    { label: 'Patient Comfort', delay: 0.3, src: '/images/books-and-magazines.webp' },
    { label: 'Clinic Exterior', delay: 0.35, src: '/images/clinic-exterior.webp' },
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
                            <img src={photo.src} alt={photo.label} className={styles.image} />
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
