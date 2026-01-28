import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Services.module.scss';

const services = [
    {
        iconType: 'image',
        icon: '/images/orthodontics.webp',
        title: 'Orthodontics',
        description: 'Straighten your teeth with modern braces and invisible aligners.',
        link: '/treatments/orthodontics'
    },
    {
        iconType: 'image',
        icon: '/images/general.webp',
        title: 'General Dentistry',
        description: 'Comprehensive care for all ages including cleanings, fillings, and preventive treatments.',
        link: '/treatments/general'
    },
    {
        iconType: 'image',
        icon: '/images/cosmetic.webp',
        title: 'Cosmetic Dentistry',
        description: 'Transform your smile with veneers, whitening, and aesthetic bonding.',
        link: '/treatments/cosmetic'
    },
    {
        iconType: 'image',
        icon: '/images/preventive.webp',
        title: 'Preventive Care',
        description: 'Personalized hygiene plans to prevent issues before they start.',
        link: '/treatments/preventive'
    }
];

const MotionLink = motion(Link);

const Services = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Specialized Treatments</h2>
                    <Link to="/treatments" className={styles.viewAll}>View All Treatments &rarr;</Link>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <MotionLink
                            key={index}
                            to={service.link}
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={service.icon} alt={service.title} className={styles.serviceImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <span className={styles.link}>Learn More</span>
                            </div>
                        </MotionLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
