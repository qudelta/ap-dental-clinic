import { motion } from 'framer-motion';
import styles from './Story.module.scss';

const Story = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={styles.label}>Our Story</span>
                    <h2 className={styles.heading}>Built on a Foundation of Trust</h2>
                    <p className={styles.text}>
                        AP Dental was founded in 2019 by Dr. Gurdev Singh Bali with a singular vision: to create a dental practice that feels less like a clinic and more like a sanctuary for oral health in Baramulla. We saw a gap in the region for specialized orthodontic care delivered in a calm, unhurried environment.
                    </p>
                    <p className={styles.text}>
                        Since our inception, we have grown from a single-chair practice to a state-of-the-art facility, but our core mission remains unchanged: <strong>treat the person, not just the teeth.</strong>
                    </p>
                </motion.div>

                <motion.div
                    className={styles.image}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <img
                        src="/images/dr-gurdev-bali.jpg"
                        alt="Dr. Gurdev Bali"
                        className={styles.photo}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
