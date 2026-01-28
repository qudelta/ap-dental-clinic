import { useState } from 'react';
import styles from './Gallery.module.scss';


const clinicPhotos = [
    { id: 1, src: '/images/clinic-exterior.webp', alt: 'Clinic Entrance' },
    { id: 2, src: '/images/waiting-area.webp', alt: 'Modern Waiting Area' },
    { id: 3, src: '/images/consultation-room.webp', alt: 'Advanced Treatment Room' },
    { id: 4, src: '/images/consultation-room-2.webp', alt: 'Sterilization Center' },
    { id: 5, src: '/images/books-and-magazines.webp', alt: 'Patient Comfort' },
    { id: 6, src: '/images/equipments.webp', alt: 'Digital Imaging Technology' }
];
const casesPhotos = [
    '/images/smile-story-1.webp',
    '/images/smile-story-2.webp',
    '/images/smile-story-3.webp',
    '/images/smile-story-4.webp'
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('clinic');

    const kanisporaPhotos = [
        '/images/gallery/kanispora/IMG_3860.webp',
        '/images/gallery/kanispora/IMG_3861.webp',
        '/images/gallery/kanispora/IMG_3862.webp',
        '/images/gallery/kanispora/IMG_3863.webp',
        '/images/gallery/kanispora/IMG_3864.webp',
        '/images/gallery/kanispora/IMG_3865.webp',
        '/images/gallery/kanispora/IMG_3866.webp',
        '/images/gallery/kanispora/IMG_3867.webp',
        '/images/gallery/kanispora/IMG_3868.webp',
        '/images/gallery/kanispora/IMG_3869.webp'
    ];

    return (
        <div className={styles.page}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="text-primary" style={{ fontSize: '2.5rem', fontFamily: 'Libre Baskerville, serif', marginBottom: '1rem' }}>Gallery</h1>
                    <p style={{ color: '#64748b' }}>A glimpse into our world</p>
                </div>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'clinic' ? styles.active : ''}`}
                        onClick={() => setActiveTab('clinic')}
                    >
                        Baramulla Branch
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'kanispora' ? styles.active : ''}`}
                        onClick={() => setActiveTab('kanispora')}
                    >
                        Kanispora Branch
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'cases' ? styles.active : ''}`}
                        onClick={() => setActiveTab('cases')}
                    >
                        Smile Stories (Cases)
                    </button>
                </div>

                <div className={styles.grid}>
                    {activeTab === 'clinic' && (
                        clinicPhotos.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <img src={item.src} alt={item.alt} className={styles.image} />
                            </div>
                        ))
                    )}
                    {activeTab === 'cases' && (
                        casesPhotos.map((src, index) => (
                            <div key={index} className={styles.item}>
                                <img src={src} alt={`Smile Story ${index + 1}`} className={styles.image} />
                            </div>
                        ))
                    )}
                    {activeTab === 'kanispora' && (
                        kanisporaPhotos.map((src, index) => (
                            <div key={index} className={styles.item}>
                                <img src={src} alt={`Kanispora Branch ${index + 1}`} className={styles.image} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
