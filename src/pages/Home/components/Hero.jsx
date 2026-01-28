import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>


            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={styles.mainTitle}>
                            Redefining Your <br />
                            <span className={styles.highlightBlue}>Smile</span> <span className={styles.highlightYellow}>Journey.</span>
                        </h1>

                        <p className={styles.subtitle}>
                            Experience world-class orthodontics and dental care in a calm,
                            state-of-the-art environment. Your smile is our masterpiece.
                        </p>

                        <div className={styles.actions}>
                            <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
                            <Link to="/doctor" className="btn btn-outline">Meet Our Specialists</Link>
                        </div>
                        <div className={styles.actions} style={{ marginTop: '0.8rem' }}>
                            <a href="tel:+919541848030" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.8)', color: 'white', minWidth: '200px' }}>Call Us Now</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
