import styles from './Technology.module.scss';
import { Link } from 'react-router-dom';

const equipment = [
    {
        name: 'Digital Intraoral Scanner',
        desc: 'No more messy impression material. Our 3D scanner takes thousands of images per second to create a precise digital model of your teeth in minutes.',
        benefit: 'Greater accuracy & comfort'
    },
    {
        name: 'Digital OPG & X-Rays',
        desc: 'Low-radiation digital imaging that provides instant, high-definition views of your teeth, jaw, and bone structure for accurate diagnosis.',
        benefit: '90% less radiation than traditional X-rays'
    },
    {
        name: 'Diode Soft Tissue Laser',
        desc: 'Advanced laser technology for gum surgeries, sterilization, and teeth whitening. It minimizes bleeding and accelerates healing.',
        benefit: 'Painless & suture-free procedures'
    },
    {
        name: 'Rotary Endodontics',
        desc: 'Electric handpieces that make Root Canal Treatments faster, quieter, and more precise than manual filing.',
        benefit: 'Quicker appointments & better cleaning'
    },
    {
        name: 'Class B Autoclave',
        desc: 'Hospital-grade sterilization equipment that uses vacuum and steam to ensure 100% sterile instruments for every patient.',
        benefit: 'Complete safety & peace of mind'
    }
];

const Technology = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <h1>Our Technology</h1>
                    <p>World-class infrastructure for world-class care.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.intro}>
                    <p>At AP Dental, we believe that the right technology combined with expert skills leads to the best outcomes. We have invested in state-of-the-art equipment to ensure your treatment is precise, comfortable, and safe.</p>
                </div>

                <div className={styles.grid}>
                    {equipment.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                {item.name} Image
                            </div>
                            <div className={styles.content}>
                                <h2>{item.name}</h2>
                                <p className={styles.description}>{item.desc}</p>
                                <div className={styles.benefit}>
                                    <strong>Patient Benefit:</strong> {item.benefit}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <h2>Experience Modern Dentistry</h2>
                    <Link to="/contact" className="btn btn-primary">Book an Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Technology;
