import styles from './Treatments.module.scss';
import { Link } from 'react-router-dom';
import { FaTeethOpen, FaTooth, FaMagic, FaShieldAlt } from 'react-icons/fa';


const treatments = [
    {
        path: '/treatments/orthodontics',
        title: 'Orthodontics',
        desc: 'Alignment solutions including Braces & Invisalign.',
        icon: <FaTeethOpen />,
        image: '/images/orthodontics.png'
    },
    {
        path: '/treatments/general',
        title: 'General Dentistry',
        desc: 'RCT, Fillings, and comprehensive oral care.',
        icon: <FaTooth />,
        image: '/images/general.png'
    },
    {
        path: '/treatments/cosmetic',
        title: 'Cosmetic Dentistry',
        desc: 'Veneers, Whitening, and Smile Design.',
        icon: <FaMagic />,
        image: '/images/cosmetic.png'
    },
    {
        path: '/treatments/preventive',
        title: 'Preventive Care',
        desc: 'Hygiene, cleanings, and sealants.',
        icon: <FaShieldAlt />,
        image: '/images/preventive.png'
    }
];

const Treatments = () => {
    return (
        <div className={styles.page}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="text-primary" style={{ fontSize: '2.5rem', fontFamily: 'Libre Baskerville, serif', marginBottom: '1rem' }}>Our Specialities</h1>
                    <p style={{ color: '#64748b' }}>Comprehensive care tailored to your needs.</p>
                </div>

                <div className={styles.grid}>
                    {treatments.map((t, i) => (
                        <Link key={i} to={t.path} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={t.image} alt={t.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.iconWrapper}>{t.icon}</div>
                                <h2>{t.title}</h2>
                                <p>{t.desc}</p>
                                <span className={styles.linkText}>Learn More &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Treatments;
