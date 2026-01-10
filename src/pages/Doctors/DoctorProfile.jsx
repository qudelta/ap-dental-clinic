import { useParams, Link, Navigate } from 'react-router-dom';
import { doctors } from '@/data/doctors';
import styles from './DoctorProfile.module.scss';
import { FaGraduationCap, FaAward, FaClock, FaIdCardAlt, FaArrowLeft } from 'react-icons/fa';

const DoctorProfile = () => {
    const { id } = useParams();
    const doctor = doctors.find(d => d.id === id);

    if (!doctor) {
        return <Navigate to="/doctors" replace />;
    }

    return (
        <div className={styles.page}>
            <div className="container">
                <Link to="/doctors" className={styles.backLink}><FaArrowLeft /> Back to Team</Link>

                <div className={styles.profileHeader}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.placeholderImage}>{doctor.name}</div>
                    </div>

                    <div className={styles.headerInfo}>
                        <span className={styles.role}>{doctor.role}</span>
                        <h1>{doctor.name}</h1>
                        <p className={styles.exp}>{doctor.experience} Experience</p>

                        <div className={styles.specialties}>
                            {doctor.specialties.map((s, i) => (
                                <span key={i} className={styles.tag}>{s}</span>
                            ))}
                        </div>

                        <Link to="/contact" className="btn btn-primary">Book Appointment with {doctor.name.split(' ')[1]}</Link>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.mainContent}>
                        <section className={styles.section}>
                            <h2>About</h2>
                            <p>{doctor.bio}</p>
                        </section>

                        <section className={styles.section}>
                            <h2>Education & Credentials</h2>
                            <ul className={styles.list}>
                                {doctor.education.map((edu, i) => (
                                    <li key={i}><FaGraduationCap className={styles.icon} /> {edu}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>Professional Memberships</h2>
                            <ul className={styles.list}>
                                {doctor.memberships.map((mem, i) => (
                                    <li key={i}><FaIdCardAlt className={styles.icon} /> {mem}</li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.card}>
                            <h3><FaClock /> Availability</h3>
                            <p>{doctor.schedule}</p>
                            <div className={styles.divider}></div>
                            <p className={styles.note}>*Schedule subject to change. Please call to confirm.</p>
                        </div>

                        <div className={styles.funFact}>
                            <h3>Did You Know?</h3>
                            <p>{doctor.funFact}</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
