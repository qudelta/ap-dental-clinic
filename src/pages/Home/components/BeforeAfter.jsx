import { motion } from 'framer-motion';
import styles from './BeforeAfter.module.scss';

const results = [
    {
        name: 'Transformation Case 1',
        image: '/images/smile-story-1.jpg'
    },
    {
        name: 'Transformation Case 2',
        image: '/images/smile-story-2.jpg'
    },
    {
        name: 'Transformation Case 3',
        image: '/images/smile-story-3.jpg'
    },
    {
        name: 'Transformation Case 4',
        image: '/images/smile-story-4.jpg'
    }
];

const BeforeAfter = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.heading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Smile Transformations
                    </motion.h2>
                    <motion.p
                        className={styles.subheading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Real patients, real results. See the difference our treatments make.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ y: 30 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={result.image}
                                    alt={result.name}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.info}>
                                <p className={styles.caption} style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111' }}>{result.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <p>Ready to transform your smile?</p>
                    <a href="/contact" className="btn btn-primary">Start Your Journey</a>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
