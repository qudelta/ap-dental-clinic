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
                            <h3>AP Dental Clinic - Main Branch</h3>
                            <div className={styles.infoRow}>
                                <FaMapMarkerAlt className={styles.icon} />
                                <p>123 Dental Avenue, Medical District<br />New Delhi, India 110001</p>
                            </div>
                            <div className={styles.infoRow}>
                                <FaPhone className={styles.icon} />
                                <p>+91 123-456-7890</p>
                            </div>
                            <div className={styles.infoRow}>
                                <FaClock className={styles.icon} />
                                <p>Mon - Sat: 10:00 AM - 8:00 PM<br />Sun: By Appointment</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.locationCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3>AP Dental Clinic - City Center</h3>
                            <div className={styles.infoRow}>
                                <FaMapMarkerAlt className={styles.icon} />
                                <p>456 Wellness Plaza, City Center<br />New Delhi, India 110002</p>
                            </div>
                            <div className={styles.infoRow}>
                                <FaPhone className={styles.icon} />
                                <p>+91 987-654-3210</p>
                            </div>
                            <div className={styles.infoRow}>
                                <FaClock className={styles.icon} />
                                <p>Mon - Sat: 11:00 AM - 9:00 PM</p>
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
                            <small>Details coming soon</small>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
