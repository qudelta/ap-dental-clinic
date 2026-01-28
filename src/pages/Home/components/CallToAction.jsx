import { Link } from 'react-router-dom';
import styles from './CallToAction.module.scss';

const CallToAction = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.heading}>Ready to Start Your Smile Journey?</h2>
                <p className={styles.subheading}>Book your consultation today and take the first step towards a healthier smile.</p>
                <div className={styles.actions}>
                    <Link to="/contact" className="btn btn-secondary">Book Appointment</Link>
                    <a href="tel:+919541848030" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Call Us Now</a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
