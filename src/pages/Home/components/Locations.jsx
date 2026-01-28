import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import styles from './Locations.module.scss';

const mapUrls = {
    baramulla: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.226913850453!2d74.34651510842112!3d34.20691301813086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e107f607840e89%3A0x868a75b6225a0dca!2sMint%20Business%20Centre!5e0!3m2!1sen!2sin!4v1769612230636!5m2!1sen!2sin',
    kanispora: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.792686457586!2d74.40040584051815!3d34.218658389008425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e107bb4fcc5273%3A0xa136762abec2ce06!2sAP%20DENTAL%20CLINIC%2C%20BARAMULLA!5e0!3m2!1sen!2sin!4v1768378130022!5m2!1sen!2sin'
};

const Locations = () => {
    const [activeBranch, setActiveBranch] = React.useState('kanispora');

    return (
        <section className={styles.locations}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Visit Our <span className={styles.highlight}>Clinics</span></h2>
                    <p>Conveniently located to serve you better. Click a branch to view on map.</p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Location Details */}
                    <div className={styles.details}>
                        <motion.div
                            className={`${styles.locationCard} ${activeBranch === 'baramulla' ? styles.active : ''}`}
                            onClick={() => setActiveBranch('baramulla')}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className={styles.cardHeader}>
                                <h3>Baramulla Branch</h3>
                                {activeBranch === 'baramulla' && <span className={styles.badge}>Viewing</span>}
                            </div>
                            <div className={styles.infoRow}>
                                <FaMapMarkerAlt className={styles.icon} />
                                <p>1st Floor, Mint Business Centre,<br />Baramulla, Jammu & Kashmir</p>
                            </div>
                            <div className={styles.infoRow}>
                                <FaPhone className={styles.icon} />
                                <p>+91 95418 48030</p>
                            </div>
                            <div className={styles.infoRow}>
                                <FaClock className={styles.icon} />
                                <p>Mon - Sat: 10AM - 8PM<br />Sun: Closed</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className={`${styles.locationCard} ${activeBranch === 'kanispora' ? styles.active : ''}`}
                            onClick={() => setActiveBranch('kanispora')}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className={styles.cardHeader}>
                                <h3>Kanispora Branch</h3>
                                {activeBranch === 'kanispora' && <span className={styles.badge}>Viewing</span>}
                            </div>
                            <div className={styles.infoRow}>
                                <FaMapMarkerAlt className={styles.icon} />
                                <p>National Highway,<br />Kanispora, Jammu & Kashmir</p>
                            </div>
                            <div className={styles.infoRow}>
                                <FaPhone className={styles.icon} />
                                <p>+91 95418 48030</p>
                            </div>
                            <div className={styles.infoRow}>
                                <FaClock className={styles.icon} />
                                <p>Mon - Sat: 10AM - 8PM<br />Sun: Closed</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Map Placeholder */}
                    <motion.div
                        className={styles.mapContainer}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className={styles.mapWrapper}>
                            <iframe
                                src={mapUrls[activeBranch]}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map of ${activeBranch} branch`}
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
