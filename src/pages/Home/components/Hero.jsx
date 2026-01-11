import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.h1
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Redefining Your <br /><span className={styles.highlight}>Smile Journey.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        Experience world-class orthodontics and dental care in a calm, state-of-the-art environment. Your smile is our masterpiece.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
                        <Link to="/doctor" className="btn btn-outline">Meet Dr. Bali</Link>
                    </motion.div>
                </div>

                {/* Placeholder for Hero Image - User to replace */}
                <div className={styles.imageOverlay}></div>
            </div>
        </section>
    );
};

export default Hero;
