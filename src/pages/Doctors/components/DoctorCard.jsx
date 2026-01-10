import { Link } from 'react-router-dom';
import styles from './DoctorCard.module.scss';

const DoctorCard = ({ doctor }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imagePlaceholder}>
                <span>{doctor.name}</span>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{doctor.name}</h3>
                <p className={styles.specialty}>{doctor.specialty}</p>
                <p className={styles.exp}>{doctor.exp}</p>
                <Link to={`/doctors/${doctor.id}`} className={styles.link}>View Profile &rarr;</Link>
            </div>
        </div>
    );
};

export default DoctorCard;
