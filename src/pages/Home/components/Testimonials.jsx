import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Testimonials.module.scss';

const testimonials = [
    {
        name: "Tanveen Tariq",
        treatment: "Patient Experience",
        text: "I had a wonderful experience at this clinic. The ambience is very clean, modern, and calming, which immediately puts you at ease. The doctor is highly professional, explains every step clearly, and ensures you are comfortable throughout."
    },
    {
        name: "Zafira Javid",
        treatment: "Braces Treatment",
        text: "I just can't stop smiling! AP Dental Clinic has truly outdone themselves with my braces treatment. The level of expertise, care, and attention to detail is unparalleled."
    },
    {
        name: "Karampal Singh",
        treatment: "Root Canal Treatment",
        text: "Best experience ever Dr gurdev ,all staff member are soo cooperative. Firstly was soo scared of my rct but doctor did it very properly with patience. Must visit for your dental treatments best in the town."
    }
];

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Patient Stories</h2>
                    <Link to="/testimonials" className={styles.viewAll}>Read More Reviews &rarr;</Link>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <div className={styles.icon}><FaQuoteLeft /></div>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p className={styles.text}>{t.text}</p>
                            <div className={styles.author}>
                                <p className={styles.name}>{t.name}</p>
                                <p className={styles.treatment}>{t.treatment}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
