import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './Contact.module.scss';


const branches = {
    baramulla: {
        name: 'Baramulla Branch',
        address: '1st Floor, Mint Business Centre',
        location: 'Baramulla, Jammu & Kashmir',
        phone: '+91 95418 48030',
        email: 'appointments@apdental.com',
        hours: 'Mon - Sat: 10:00 AM - 8:00 PM',
        subHours: 'Sun: Closed'
    },
    kanispora: {
        name: 'Kanispora Branch',
        address: 'National Highway',
        location: 'Kanispora, Jammu & Kashmir',
        phone: '+91 95418 48030',
        email: 'appointments@apdental.com',
        hours: 'Mon - Sat: 10:00 AM - 8:00 PM',
        subHours: 'Sun: Closed'
    }
};

const Contact = () => {
    const [selectedBranch, setSelectedBranch] = useState('baramulla');
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const branch = branches[selectedBranch];

    const onSubmit = async (data) => {
        // Placeholder for API call
        console.log({ ...data, branch: selectedBranch });
        await new Promise(r => setTimeout(r, 1000)); // Simulate delay
        alert(`Thank you, ${data.name}! Your appointment request has been sent to our ${branch.name}.`);
        reset();
    };

    return (
        <div className={styles.page}>
            <div className="container">
                {/* Branch Selector */}
                <div className={styles.branchSelector}>
                    <h2>Choose Your Location</h2>
                    <div className={styles.branchTabs}>
                        <button
                            className={`${styles.tab} ${selectedBranch === 'baramulla' ? styles.active : ''}`}
                            onClick={() => setSelectedBranch('baramulla')}
                        >
                            📍 Baramulla
                        </button>
                        <button
                            className={`${styles.tab} ${selectedBranch === 'kanispora' ? styles.active : ''}`}
                            onClick={() => setSelectedBranch('kanispora')}
                        >
                            📍 Kanispora
                        </button>
                    </div>
                </div>

                <div className={styles.grid}>
                    {/* Contact Info */}
                    <div className={styles.info}>
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.subtitle}>Visit us at our {branch.name}</p>

                        <div className={styles.details}>
                            <div className={styles.item}>
                                <FaMapMarkerAlt className={styles.icon} />
                                <div>
                                    <h3>{branch.name}</h3>
                                    <p>{branch.address}<br />{branch.location}</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <FaPhoneAlt className={styles.icon} />
                                <div>
                                    <h3>Phone</h3>
                                    <p>{branch.phone}</p>
                                    <p className={styles.subtext}>Mon-Sat, 10am - 8pm</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <FaEnvelope className={styles.icon} />
                                <div>
                                    <h3>Email</h3>
                                    <p>{branch.email}</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <FaClock className={styles.icon} />
                                <div>
                                    <h3>Working Hours</h3>
                                    <p>{branch.hours}<br />{branch.subHours}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className={styles.map}>
                            <span>Google Map Embed - {branch.name}</span>
                        </div>
                    </div>

                    {/* Appointment Form */}
                    <div className={styles.formWrapper}>
                        <h2>Book an Appointment</h2>
                        <p className={styles.formSubtitle}>Scheduling for {branch.name}</p>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <div className={styles.field}>
                                <label>Full Name</label>
                                <input {...register('name', { required: true })} placeholder="John Doe" />
                                {errors.name && <span className={styles.error}>Name is required</span>}
                            </div>

                            <div className={styles.field}>
                                <label>Phone Number</label>
                                <input {...register('phone', { required: true, pattern: /^\\d{10}$/ })} placeholder="9876543210" />
                                {errors.phone && <span className={styles.error}>Valid 10-digit phone number required</span>}
                            </div>

                            <div className={styles.field}>
                                <label>Preferred Date</label>
                                <input type="date" {...register('date', { required: true })} />
                                {errors.date && <span className={styles.error}>Date is required</span>}
                            </div>

                            <div className={styles.field}>
                                <label>Reason for Visit</label>
                                <select {...register('reason')}>
                                    <option value="consultation">General Consultation</option>
                                    <option value="braces">Braces / Aligners</option>
                                    <option value="pain">Tooth Pain</option>
                                    <option value="cosmetic">Cosmetic / Whitening</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label>Message (Optional)</label>
                                <textarea {...register('message')} rows="4"></textarea>
                            </div>

                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting ? 'Sending...' : 'Request Appointment'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
