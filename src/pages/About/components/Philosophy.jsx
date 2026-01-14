import styles from './Philosophy.module.scss';
import { FaLeaf, FaBalanceScale, FaMicroscope, FaLightbulb } from 'react-icons/fa';

const Philosophy = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Our Philosophy of Care</h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}><FaLeaf /></div>
                        <h3>Conservative Dentistry</h3>
                        <p>We believe in preserving nature's design. We only intervene when necessary and use minimally invasive techniques.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><FaMicroscope /></div>
                        <h3>Evidence-Based</h3>
                        <p>No fads. Every treatment plan is backed by current scientific literature and clinical success data.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><FaBalanceScale /></div>
                        <h3>Ethical Planning</h3>
                        <p>We never upsell. You get a transparent breakdown of what you need, what represents value, and what can wait.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><FaLightbulb /></div>
                        <h3>Patient Education</h3>
                        <p>We believe an informed patient is a healthier patient. We take time to explain your oral health so you can make confident decisions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
