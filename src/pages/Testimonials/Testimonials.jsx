import { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.scss';
import { motion } from 'framer-motion';

const reviews = [
    { id: 1, name: 'Lone Nizu', treatment: 'Braces Treatment', text: 'I had my braces treatment at AP Dental with Dr. Gurudev Singh, and I am very happy with the results. The before and after difference is clearly visible, and my smile has improved a lot compared to before.', category: 'ortho' },
    { id: 2, name: 'Tanveen Tariq', treatment: 'Patient Experience', text: 'I had a wonderful experience at this clinic. The ambience is very clean, modern, and calming, which immediately puts you at ease. The doctor is highly professional, explains every step clearly, and ensures you are comfortable throughout.', category: 'general' },
    { id: 3, name: 'Momina Tariq', treatment: 'General Dentistry', text: 'The staff is really cooperative and kind to patients also. A big thanks to Dr. Gurdev ji.. Dr. Aamir and Dr. Junaid...', category: 'general' },
    { id: 4, name: 'Mehak Bhatt', treatment: 'General Dentistry', text: 'I always prefer AP dental clinic at Kanispora Baramulla. The doctors are experienced and also skilled in their profession. Moreover, the clinic is also equipped with modern facilities.', category: 'general' },
    { id: 5, name: 'Karampal Singh', treatment: 'Root Canal Treatment', text: 'Best experience ever with Dr. Gurdev, all staff members are soo cooperative and have good behavior. Firstly was so scared of my RCT but Dr. Junaid did it very properly and with patience. Must visit for your dental treatments, best in town.', category: 'general' },
    { id: 6, name: 'Shabnum Shafiq', treatment: 'Braces Treatment', text: 'Had my braces done, & I am very satisfied with the results. Dr. Gurdev is very professional, positive, helpful & personable in his approach. The staff were always friendly. More importantly the rooms were clean & hygienic.', category: 'ortho' },
    { id: 7, name: 'Zafira Javid', treatment: 'Braces Treatment', text: 'I just can\'t stop smiling! AP Dental Clinic has truly outdone themselves with my braces treatment. The level of expertise, care, and attention to detail is unparalleled.', category: 'ortho' },
    { id: 8, name: 'farhana ashraf', treatment: 'Orthodontic Treatment', text: 'This is the best clinic to visit for the orthodontic treatment. Doctor Gurudev and the staff are very friendly and helpful. The way they care for their patients is impeccable.', category: 'ortho' },
    { id: 9, name: 'sandeep kour', treatment: 'General Dentistry', text: 'I always prefer AP dental clinic at Kanispora Baramulla. The doctors are experienced and skilled in their profession. Moreover, the clinic is equipped with modern facilities. The staff is really cooperative and kind to patients also. A big thanks to Dr. Gurdev ji.', category: 'general' },
    { id: 10, name: 'Shazia', treatment: 'Specialized Care', text: 'AP Dental Clinic in Kanispora. The clinic is well-maintained, and the staff is courteous and professional. The specialists here are highly skilled and attentive, ensuring that every procedure is done with care and precision.', category: 'general' },
    { id: 11, name: 'Junaid Ah', treatment: 'Orthodontic Treatment', text: 'Best Dental clinic for Orthodontic treatment and for other treatments as well. Staff is very professional and cooperative. Special thanks to Dr Gurdev Singh Bali.', category: 'ortho' },
    { id: 12, name: 'Masrat Jan', treatment: 'Braces Treatment', text: 'I recently underwent dental braces treatment at AP Dental Clinic Kanispora Baramulla & Alhamdulilah I was highly impressed with the level of professionalism shown by Dr. Gurdev Singh (orthodontist). The Doctor is so kind & friendly & I am extremely satisfied with the results!', category: 'ortho' },
    { id: 13, name: 'rohal ali', treatment: 'Pediatric Dentistry', text: 'One of the most humble, passionate, and professional doctors as per my personal experience from the last five years as I observed during the treatment of my son. I suggest this clinic to all of my friends having dental issues; visit once and you will feel the difference in respect of hygiene, professionalism, and services at an affordable cost.', category: 'general' },
    { id: 14, name: 'syed noorain', treatment: 'Braces Experience', text: 'Overall a wonderful braces experience! The staff is incredibly friendly and makes you feel comfortable from start to finish. The clinic has such a warm, welcoming atmosphere, and their service is top-notch. Highly recommend!', category: 'ortho' },
    { id: 15, name: 'Owais Mushtaq', treatment: 'Patient Care', text: 'I\'m delighted to share my positive experience at AP Dental Clinic with Dr. Gurdev Bali! From the moment I stepped into their clinic, I was greeted with warmth and professionalism. The entire staff, particularly Dr. Gurdev Bali, exhibited a high level of expertise and genuine care.', category: 'general' },
];

const Testimonials = () => {
    const [filter, setFilter] = useState('all');

    const filteredReviews = filter === 'all'
        ? reviews
        : reviews.filter(r => r.category === filter);

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Patient Stories
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Read what our patients have to say about their experience with us.
                    </motion.p>
                </div>

                <div className={styles.filters}>
                    <button className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`${styles.filterBtn} ${filter === 'ortho' ? styles.active : ''}`} onClick={() => setFilter('ortho')}>Orthodontics</button>
                    <button className={`${styles.filterBtn} ${filter === 'general' ? styles.active : ''}`} onClick={() => setFilter('general')}>General & Other</button>
                </div>

                <motion.div
                    layout
                    className={styles.grid}
                >
                    {filteredReviews.map(review => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={review.id}
                            className={styles.card}
                        >
                            <div className={styles.icon}><FaQuoteLeft /></div>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p className={styles.text}>{review.text}</p>
                            <div className={styles.author}>
                                <p className={styles.name}>{review.name}</p>
                                <span className={styles.treatment}>{review.treatment}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials;
