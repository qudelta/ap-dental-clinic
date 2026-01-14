import { useState } from 'react';
import styles from './Gallery.module.scss';

const clinicPhotos = [
    '/images/clinic-exterior.jpg',
    '/images/waiting-area.jpg',
    '/images/consultation-room.jpg',
    '/images/consultation-room-2.jpg',
    '/images/books-and-magazines.jpg',
    '/images/equipments.jpg'
];
const casesPhotos = [
    '/images/smile-story-1.jpg',
    '/images/smile-story-2.jpg',
    '/images/smile-story-3.jpg',
    '/images/smile-story-4.jpg'
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('clinic');

    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className={styles.title}>Gallery</h1>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'clinic' ? styles.active : ''}`}
                        onClick={() => setActiveTab('clinic')}
                    >
                        Clinic Environment
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'cases' ? styles.active : ''}`}
                        onClick={() => setActiveTab('cases')}
                    >
                        Smile Stories (Cases)
                    </button>
                </div>

                <div className={styles.grid}>
                    {activeTab === 'clinic' ? (
                        clinicPhotos.map((src, index) => (
                            <div key={index} className={styles.item}>
                                <img src={src} alt={`Clinic Photo ${index + 1}`} className={styles.image} />
                            </div>
                        ))
                    ) : (
                        casesPhotos.map((src, index) => (
                            <div key={index} className={styles.item}>
                                <img src={src} alt={`Smile Story ${index + 1}`} className={styles.image} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
