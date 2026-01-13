import styles from './Doctors.module.scss';
import DoctorCard from './components/DoctorCard';

const doctors = [
    {
        id: 'gurdev-bali',
        name: 'Dr. Gurdev Singh Bali',
        specialty: 'Orthodontist (BDS, MDS)',
        exp: '12 Years Experience',
        image: '', // Placeholder
    },
    {
        id: 'serish-dr',
        name: 'Dr. Serish',
        specialty: 'BDS',
        exp: 'Experienced Professional',
        image: '', // Placeholder
    },
    {
        id: 'rajesh-kumar',
        name: 'Dr. Rajesh Kumar',
        specialty: 'General Dentist (BDS, MDS)',
        exp: '15 Years Experience',
        image: '',
    },
    {
        id: 'sneha-reddy',
        name: 'Dr. Sneha Reddy',
        specialty: 'Pediatric Dentist (BDS)',
        exp: '8 Years Experience',
        image: '',
    },
    {
        id: 'vikram-singh',
        name: 'Dr. Vikram Singh',
        specialty: 'Oral Surgeon (MDS)',
        exp: '10 Years Experience',
        image: '',
    }
];

const Doctors = () => {
    return (
        <div className={styles.page}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Meet Our Specialists</h1>
                    <p className={styles.subtitle}>A team of dedicated professionals committed to your oral health.</p>
                </div>

                <div className={styles.grid}>
                    {doctors.map(doc => (
                        <DoctorCard key={doc.id} doctor={doc} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
