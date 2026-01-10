import { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.scss';

const reviews = [
    { id: 1, name: 'Rohan M.', treatment: 'Orthodontics', text: 'Dr. Aditi made the whole process so easy. I can finally smile without feeling self-conscious.', category: 'ortho' },
    { id: 2, name: 'Sanya K.', treatment: 'Ceramic Braces', text: 'I was worried about braces at my age, but the ceramic ones were barely noticeable.', category: 'ortho' },
    { id: 3, name: 'Vikram S.', treatment: 'Root Canal', text: 'Best dental experience I\'ve had. Painless and very professional environment.', category: 'general' },
    { id: 4, name: 'Anita R.', treatment: 'Teeth Whitening', text: 'My smile looks so much brighter for my wedding! Thank you AP Dental.', category: 'cosmetic' },
    { id: 5, name: 'Rahul D.', treatment: 'Invisalign', text: 'The aligners were so comfortable, I forgot I was wearing them.', category: 'ortho' },
    { id: 6, name: 'Meera P.', treatment: 'Dental Implants', text: 'The procedure was explained perfectly, and the recovery was smooth.', category: 'general' },
];

const Testimonials = () => {
    const [filter, setFilter] = useState('all');

    const filteredReviews = filter === 'all'
        ? reviews
        : reviews.filter(r => r.category === filter);

    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className={styles.title}>Patient Stories</h1>
                <p className={styles.subtitle}>Real experiences from our valued patients.</p>

                <div className={styles.filters}>
                    <button className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`${styles.filterBtn} ${filter === 'ortho' ? styles.active : ''}`} onClick={() => setFilter('ortho')}>Orthodontics</button>
                    <button className={`${styles.filterBtn} ${filter === 'general' ? styles.active : ''}`} onClick={() => setFilter('general')}>General</button>
                    <button className={`${styles.filterBtn} ${filter === 'cosmetic' ? styles.active : ''}`} onClick={() => setFilter('cosmetic')}>Cosmetic</button>
                </div>

                <div className={styles.grid}>
                    {filteredReviews.map(review => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.icon}><FaQuoteLeft /></div>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p className={styles.text}>{review.text}</p>
                            <div className={styles.author}>
                                <p className={styles.name}>{review.name}</p>
                                <span className={styles.treatment}>{review.treatment}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
