import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './DoctorHighlight.module.scss';
import { FaUserMd, FaGraduationCap } from 'react-icons/fa';

const DoctorHighlight = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.imageWrapper}
                >
                    <div className={styles.imagePlaceholder}>
                        <FaUserMd className={styles.placeholderIcon} />
                        <span>Our Expert Team</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.content}
                >
                    <span className={styles.tag}>5 Specialist Doctors</span>
                    <h2 className={styles.name}>Meet Our Expert Team</h2>
                    <div className={styles.qualifications}>
                        <span className={styles.qual}><FaGraduationCap /> All MDS from Govt. Dental College, Srinagar</span>
                    </div>

                    <div className={styles.specialties}>
                        <span className={styles.specialty}>Orthodontics</span>
                        <span className={styles.specialty}>Endodontics</span>
                        <span className={styles.specialty}>Prosthodontics</span>
                        <span className={styles.specialty}>Pediatric Dentistry</span>
                        <span className={styles.specialty}>General Dentistry</span>
                    </div>

                    <blockquote className={styles.quote}>
                        "Every smile tells a story. Let us help write yours with expertise, care, and the latest in dental technology."
                    </blockquote>

                    <Link to="/doctor" className="btn btn-primary">Meet The Team</Link>
                </motion.div>
            </div>
        </section>
    );
};

export default DoctorHighlight;
