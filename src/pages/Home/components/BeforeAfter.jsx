import { motion } from 'framer-motion';
import styles from './BeforeAfter.module.scss';

const results = [
    {
        name: 'Before & After - Case 1',
        treatment: 'Orthodontics',
        imagePlaceholder: 'Before/After Braces Treatment'
    },
    {
        name: 'Before & After - Case 2',
        treatment: 'Teeth Whitening',
        imagePlaceholder: 'Before/After Whitening'
    },
    {
        name: 'Before & After - Case 3',
        treatment: 'Smile Makeover',
        imagePlaceholder: 'Before/After Smile Design'
    },
    {
        name: 'Before & After - Case 4',
        treatment: 'Dental Implants',
        imagePlaceholder: 'Before/After Implants'
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
                                <div className={styles.placeholder}>
                                    {result.imagePlaceholder}
                                    <span className={styles.placeholderHint}>
                                        Upload your before/after image here
                                    </span>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.treatment}>{result.treatment}</h3>
                                <p className={styles.caption}>{result.name}</p>
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
