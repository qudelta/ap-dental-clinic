import styles from './Standards.module.scss';
import { FaPumpMedical, FaUserSecret, FaComments } from 'react-icons/fa';

const Standards = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.intro}>
                    <h2>Standards & Ethics</h2>
                    <p>We adhere to strict protocols to ensure your safety and privacy.</p>
                </div>

                <div className={styles.list}>
                    <div className={styles.item}>
                        <FaPumpMedical className={styles.icon} />
                        <div>
                            <h3>4-Step Sterilization</h3>
                            <p>All instruments undergo ultrasonic cleaning, packaging, and autoclaving. We track every cycle.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <FaUserSecret className={styles.icon} />
                        <div>
                            <h3>Patient Confidentiality</h3>
                            <p>Your data and medical history are securely stored and never shared without consent.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <FaComments className={styles.icon} />
                        <div>
                            <h3>Transparent Communication</h3>
                            <p>We explain every procedure, cost, and risk before we begin. No surprises.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Standards;
