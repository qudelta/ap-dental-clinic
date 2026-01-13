import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import styles from './Locations.module.scss';

const Locations = () => {
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
                    <p>Conveniently located to serve you better.</p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Location Details */}
                    <div className={styles.details}>
                        <motion.div
                            className={styles.locationCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3>Baramulla Branch</h3>
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
                            className={styles.locationCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3>Kanispora Branch</h3>
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
                        <div className={styles.mapPlaceholder}>
                            <FaMapMarkerAlt className={styles.mapIcon} />
                            <span>Google Map Embed</span>
                            <small>Baramulla / Kanispora</small>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
