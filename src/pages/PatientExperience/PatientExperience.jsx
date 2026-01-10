import styles from './PatientExperience.module.scss';
import { FaCalendarCheck, FaUserMd, FaSmileBeam } from 'react-icons/fa';

const PatientExperience = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <h1>Attributes of Care</h1>
                    <p>What to expect when you choose AP Dental.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.timeline}>
                    <div className={styles.step}>
                        <div className={styles.icon}><FaCalendarCheck /></div>
                        <div className={styles.content}>
                            <h2>01. The First Visit</h2>
                            <p>Your journey begins with a comprehensive consultation. We use digital scanning (no messy impressions) to understand your dental structure. We listen to your concerns and goals before proposing any treatment.</p>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.icon}><FaUserMd /></div>
                        <div className={styles.content}>
                            <h2>02. During Treatment</h2>
                            <p>Whether it's braces or implants, we ensure maximum comfort. Our clinic uses pain-free injection techniques and noise-cancelling headphones to help you relax.</p>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.icon}><FaSmileBeam /></div>
                        <div className={styles.content}>
                            <h2>03. Aftercare & Retention</h2>
                            <p>Treatment ends, but care continues. We provide detailed retention protocols (retainers) and schedule follow-up cleanings to ensure your smile lasts a lifetime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientExperience;
