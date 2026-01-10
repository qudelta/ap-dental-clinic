import { motion } from 'framer-motion';
import { FaTooth, FaUserMd, FaShieldAlt, FaHandHoldingHeart } from 'react-icons/fa';
import styles from './WhyChooseUs.module.scss';

const features = [
    {
        icon: <FaTooth />,
        title: 'Evidence-based Treatments',
        description: 'We prioritize scientifically proven methods for lasting results.'
    },
    {
        icon: <FaUserMd />,
        title: 'Expert Orthodontic Care',
        description: 'Specialized care tailored to your unique dental structure.'
    },
    {
        icon: <FaShieldAlt />,
        title: 'Sterilization & Hygiene',
        description: 'Strict adherence to international safety and sterilization protocols.'
    },
    {
        icon: <FaHandHoldingHeart />,
        title: 'Patient-Centric Approach',
        description: 'Your comfort and understanding are our top priorities.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Why Choose AP Dental?</h2>
                    <p className={styles.subheading}>Committed to excellence in every smile we treat.</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDesc}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
