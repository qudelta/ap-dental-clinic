import styles from './MeetTheDoctor.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const doctors = [
    {
        name: 'Dr. Gurdev Singh Bali',
        image: '/images/dr-gurdev-headshot.jpg',
        specialty: 'Orthodontist',
        qualification: 'BDS, MDS - Orthodontics',
        description: 'Lead Orthodontist specializing in invisible aligners and complex malocclusion cases.',
        experience: '14+ years'
    },
    {
        name: 'Dr. Junaid',
        specialty: 'Endodontist',
        qualification: 'BDS, MDS - Endodontics',
        description: 'Root canal specialist with expertise in saving severely damaged teeth.',
        experience: '10+ years'
    },
    {
        name: 'Dr. Amir Bashir',
        specialty: 'Prosthodontist',
        qualification: 'BDS, MDS - Prosthodontics',
        description: 'Expert in dental implants, crowns, bridges, and full mouth rehabilitation.',
        experience: '12+ years'
    },
    {
        name: 'Dr. Nidha',
        specialty: 'Pedodontist',
        qualification: 'BDS, MDS - Pediatric Dentistry',
        description: 'Child-friendly dentist specializing in dental care for infants through teens.',
        experience: '8+ years'
    },
    {
        name: 'Dr. Serish',
        specialty: 'General Dentist',
        qualification: 'BDS',
        description: 'Comprehensive general dentistry including cleanings, fillings, and preventive care.',
        experience: '10+ years'
    }
];

const MeetTheDoctor = () => {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.subtitle}>Meet Our Expert Team</span>
                        <h1>Your Smile, Our Passion</h1>
                        <p className={styles.heroText}>
                            Our specialists are graduates from the prestigious<br />
                            <strong>Government Dental College, Srinagar</strong>
                        </p>
                        <div className={styles.actions}>
                            <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid Section */}
            <section className={`container ${styles.teamSection}`}>
                <h2 className={styles.sectionTitle}>Our Specialists</h2>
                <div className={styles.teamGrid}>
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={styles.doctorCard}
                        >
                            <div className={styles.cardImage}>
                                {doctor.image ? (
                                    <img src={doctor.image} alt={doctor.name} className={styles.image} />
                                ) : (
                                    <div className={styles.placeholderImage}>{doctor.name}</div>
                                )}
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.specialty}>{doctor.specialty}</span>
                                <h3 className={styles.doctorName}>{doctor.name}</h3>
                                <p className={styles.qualification}>{doctor.qualification}</p>
                                <p className={styles.description}>{doctor.description}</p>
                                <div className={styles.experience}>
                                    <span>{doctor.experience} Experience</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Clinic Stats */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.number}>5</span>
                            <span className={styles.label}>Specialist Doctors</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.number}>50+</span>
                            <span className={styles.label}>Years Combined Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.number}>10,000+</span>
                            <span className={styles.label}>Happy Patients</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.number}>100%</span>
                            <span className={styles.label}>Qualified Team</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Quote */}
            <section className={`container ${styles.philosophy}`}>
                <h2>"Every smile tells a story. Let us help write yours."</h2>
                <p>- The AP Dental Team</p>
            </section>
        </div>
    );
};

export default MeetTheDoctor;
