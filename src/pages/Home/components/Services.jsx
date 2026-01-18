import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Services.module.scss';

const services = [
    {
        title: 'Orthodontics',
        desc: 'Alignment solutions for all ages, including metal/ceramic braces and aligners.',
        link: '/treatments#orthodontics',
        image: '/images/orthodontics.png'
    },
    {
        title: 'General Dentistry',
        desc: 'Routine checkups, fillings, and root canal treatments to keep your smile healthy.',
        link: '/treatments#general',
        image: '/images/general.png'
    },
    {
        title: 'Cosmetic Dentistry',
        desc: 'Veneers, whitening, and smile design to enhance your natural beauty.',
        link: '/treatments#cosmetic',
        image: '/images/cosmetic.png'
    },
    {
        title: 'Preventive Care',
        desc: 'Personalized hygiene plans to prevent issues before they start.',
        link: '/treatments#preventive',
        image: '/images/preventive.png'
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
                                <img src={service.image} alt={service.title} className={styles.serviceImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.desc}</p>
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
