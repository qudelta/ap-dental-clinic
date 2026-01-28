import styles from './PatientExperience.module.scss';
import {
    FaCalendarCheck, FaUserMd, FaSmileBeam, FaCoffee, FaWifi,
    FaTv, FaMusic, FaXRay, FaLaptopMedical, FaShieldAlt,
    FaCreditCard, FaFileAlt, FaClipboardCheck, FaTint
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const PatientExperience = () => {
    const journeySteps = [
        {
            icon: <FaCalendarCheck />,
            title: '01. Book Your Appointment',
            description: 'Call us or book online at your convenience. Choose a time that works best for you.'
        },
        {
            icon: <FaFileAlt />,
            title: '02. Reception & Registration',
            description: 'Arrive at our clinic where our friendly reception team will assist you with registration.'
        },
        {
            icon: <FaUserMd />,
            title: '03. Comprehensive Examination',
            description: 'Digital X-rays, intraoral camera examination, and thorough assessment by our experienced dentist.'
        },
        {
            icon: <FaClipboardCheck />,
            title: '04. Treatment Plan Discussion',
            description: 'We explain your options clearly, answer all questions, and create a personalized treatment plan together.'
        },
        {
            icon: <FaSmileBeam />,
            title: '05. Begin Your Journey',
            description: 'Start treatment immediately or schedule your next appointment. We work at your pace.'
        },
        {
            icon: <FaShieldAlt />,
            title: '06. Post-Treatment Care',
            description: 'Regular check-ups and maintenance to ensure your smile stays healthy and beautiful.'
        }
    ];

    const comfortFeatures = [
        { icon: <FaWifi />, title: 'Free WiFi', description: 'Stay connected in our waiting area' },
        { icon: <FaTv />, title: 'Entertainment', description: 'TV and magazines to help you relax' },
        { icon: <FaSmileBeam />, title: 'Ergonomic Chairs', description: 'Designed for your ultimate comfort during treatment' },
        { icon: <FaTint />, title: 'Clean Drinking Water', description: 'Purified water available for your refreshment' }
    ];

    const techFeatures = [
        {
            title: 'Digital X-Rays',
            description: 'Low-radiation digital imaging for instant and accurate diagnosis',
            benefit: 'Safer & Faster'
        },
        {
            title: 'Intraoral Cameras',
            description: 'See what we see - high-definition images of your teeth on screen',
            benefit: 'Better Understanding'
        },
        {
            title: 'Rotary Endodontics',
            description: 'Advanced electric instruments for faster, more comfortable root canal treatments',
            benefit: 'Efficient RCT'
        },
        {
            title: 'Ultrasonic Scaling',
            description: 'Gentle vibration technology for comfortable and thorough teeth cleaning',
            benefit: 'Deep Cleaning'
        }
    ];

    const safetyPoints = [
        'Hospital-grade sterilization for all instruments',
        'Single-use disposable items where applicable',
        'Regular equipment maintenance and calibration',
        'Certified and trained staff in infection control',
        'Clean and sanitized treatment rooms between patients'
    ];

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <div
                className={styles.hero}
            >
                <div className="container">
                    <motion.h1
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Your Comfort is Our Priority
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Experience modern dentistry in a calm, caring environment designed with you in mind.
                    </motion.p>
                </div>
            </div>

            {/* First Visit Journey */}
            <div className="container">
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Your First Visit Journey</h2>
                    <p className={styles.sectionSubtitle}>Here's what to expect when you visit us for the first time</p>

                    <div className={styles.timeline}>
                        {journeySteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={styles.step}
                                initial={{ x: -20 }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <div className={styles.stepContent}>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Comfort & Amenities */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Comfort & Amenities</h2>
                    <p className={styles.sectionSubtitle}>Relax in our modern, welcoming environment</p>

                    <div className={styles.amenitiesGrid}>
                        {comfortFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.amenityCard}
                                initial={{ y: 20 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.amenityIcon}>{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Advanced Technology */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Modern Dental Equipment</h2>
                    <p className={styles.sectionSubtitle}>Modern equipment for better, more comfortable care</p>

                    <div className={styles.techGrid}>
                        {techFeatures.map((tech, index) => (
                            <motion.div
                                key={index}
                                className={styles.techCard}
                                initial={{ scale: 0.95 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className={styles.techBadge}>{tech.benefit}</div>
                                <h3>{tech.title}</h3>
                                <p>{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Safety & Hygiene */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Safety & Hygiene Standards</h2>
                    <p className={styles.sectionSubtitle}>Your safety is our top priority</p>

                    <div className={styles.safetyBox}>
                        <div className={styles.safetyIcon}>
                            <FaShieldAlt />
                        </div>
                        <ul className={styles.safetyList}>
                            {safetyPoints.map((point, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ x: -10 }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                >
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </section>



                {/* CTA */}
                <div className={styles.cta}>
                    <h2>Ready to Experience the Difference?</h2>
                    <p>Book your appointment today and discover why patients choose AP Dental for their dental care.</p>
                    <a href="/contact" className="btn btn-primary">Schedule Your Visit</a>
                </div>
            </div>
        </div>
    );
};

export default PatientExperience;
