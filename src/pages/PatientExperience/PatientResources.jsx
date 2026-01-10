import styles from './PatientResources.module.scss';
import { FaFilePdf, FaCreditCard, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PatientResources = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <h1>Patient Resources</h1>
                    <p>Everything you need to know before your visit.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.grid}>
                    {/* Section 1: Forms */}
                    <section className={styles.card}>
                        <div className={styles.header}>
                            <FaFilePdf className={styles.icon} />
                            <h2>Patient Forms</h2>
                        </div>
                        <p>Save time at the reception by filling out these forms beforehand.</p>
                        <div className={styles.links}>
                            <a href="#" className={styles.downloadLink}>New Patient Registration Form (PDF)</a>
                            <a href="#" className={styles.downloadLink}>Medical History Questionnaire (PDF)</a>
                            <a href="#" className={styles.downloadLink}>Consent for Orthodontic Treatment (PDF)</a>
                        </div>
                    </section>

                    {/* Section 2: Financial */}
                    <section className={styles.card}>
                        <div className={styles.header}>
                            <FaCreditCard className={styles.icon} />
                            <h2>Insurance & Finance</h2>
                        </div>
                        <p>We believe quality dental care should be accessible. We accept:</p>
                        <ul className={styles.list}>
                            <li>All major debit and credit cards</li>
                            <li>Bajaj Finserv EMI Network</li>
                            <li>Corporate Dental Insurance (Check with front desk)</li>
                            <li>Detailed receipts provided for reimbursement</li>
                        </ul>
                    </section>

                    {/* Section 3: More Help */}
                    <section className={styles.card}>
                        <div className={styles.header}>
                            <FaQuestionCircle className={styles.icon} />
                            <h2>Need Assistance?</h2>
                        </div>
                        <p>If you have specific questions about your treatment plan or billing, our team is here to help.</p>
                        <div className={styles.actions}>
                            <Link to="/faq" className="btn btn-secondary">Visit FAQs</Link>
                            <Link to="/contact" className="btn btn-primary">Contact Support</Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PatientResources;
