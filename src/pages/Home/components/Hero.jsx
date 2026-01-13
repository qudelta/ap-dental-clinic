import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}>
                <div className={styles.blob}></div>
                <img src="/logo.svg" alt="" className={styles.backgroundLogo} />
            </div>

            <div className={`container ${styles.container}`}>
                {/* Right Side Visual */}
                <div className={styles.heroVisual}>
                    <div className={styles.pLogoContainer}>
                        <motion.img
                            src="/logo-transparent.png"
                            alt="AP Dental Logo"
                            className={styles.pLogo}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </div>
                </div>

                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={styles.mainTitle}>
                            Redefining Your <br />
                            <span className={styles.highlight}>Smile Journey.</span>
                        </h1>

                        <p className={styles.subtitle}>
                            Experience world-class orthodontics and dental care in a calm,
                            state-of-the-art environment. Your smile is our masterpiece.
                        </p>

                        <div className={styles.actions}>
                            <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
                            <Link to="/doctor" className="btn btn-outline">Meet Our Team</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
