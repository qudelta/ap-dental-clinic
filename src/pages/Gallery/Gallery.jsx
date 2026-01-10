import { useState } from 'react';
import styles from './Gallery.module.scss';

const clinicPhotos = [1, 2, 3, 4, 5, 6]; // Placeholders
const casesPhotos = [1, 2, 3, 4]; // Placeholders

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
                        clinicPhotos.map(i => (
                            <div key={i} className={styles.item}>
                                <div className={styles.placeholder}>Clinic Photo {i}</div>
                            </div>
                        ))
                    ) : (
                        casesPhotos.map(i => (
                            <div key={i} className={styles.item}>
                                <div className={styles.placeholder}>Before / After Case {i}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
