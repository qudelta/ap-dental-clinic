import styles from './Treatments.module.scss';
import { Link } from 'react-router-dom';
import { FaTeethOpen, FaTooth, FaMagic, FaShieldAlt } from 'react-icons/fa';

const treatments = [
    {
        path: '/treatments/orthodontics',
        title: 'Orthodontics',
        desc: 'Alignment solutions including Braces & Invisalign.',
        icon: <FaTeethOpen />
    },
    {
        path: '/treatments/general',
        title: 'General Dentistry',
        desc: 'RCT, Fillings, and comprehensive oral care.',
        icon: <FaTooth />
    },
    {
        path: '/treatments/cosmetic',
        title: 'Cosmetic Dentistry',
        desc: 'Veneers, Whitening, and Smile Design.',
        icon: <FaMagic />
    },
    {
        path: '/treatments/preventive',
        title: 'Preventive Care',
        desc: 'Hygiene, cleanings, and sealants.',
        icon: <FaShieldAlt />
    }
];

const Treatments = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <h1>Our Specialities</h1>
                    <p>Comprehensive care tailored to your needs.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.grid}>
                    {treatments.map((t, i) => (
                        <Link key={i} to={t.path} className={styles.card}>
                            <div className={styles.iconWrapper}>{t.icon}</div>
                            <h2>{t.title}</h2>
                            <p>{t.desc}</p>
                            <span className={styles.linkText}>Learn More &rarr;</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Treatments;
