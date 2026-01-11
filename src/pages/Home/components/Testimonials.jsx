import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Testimonials.module.scss';

const testimonials = [
    {
        name: "Rohan M.",
        treatment: "Invisalign Treatment",
        text: "Dr. Aditi made the whole process so easy. I can finally smile without feeling self-conscious. Highly recommended!"
    },
    {
        name: "Sanya K.",
        treatment: "Ceramic Braces",
        text: "I was worried about braces at my age, but the ceramic ones were barely noticeable. The results are amazing."
    },
    {
        name: "Vikram S.",
        treatment: "Root Canal & Crown",
        text: "Best dental experience I've had. Painless and very professional environment."
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
