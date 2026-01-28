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
        hours: 'Sat - Thu: 10:00 AM - 6:00 PM',
        subHours: 'Fri: Closed',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.226913850453!2d74.34651510842112!3d34.20691301813086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e107f607840e89%3A0x868a75b6225a0dca!2sMint%20Business%20Centre!5e0!3m2!1sen!2sin!4v1769612230636!5m2!1sen!2sin'
    },
    kanispora: {
        name: 'Kanispora Branch',
        address: 'National Highway',
        location: 'Kanispora, Jammu & Kashmir',
        phone: '+91 95418 48030',
        email: 'appointments@apdental.com',
        hours: 'Sat - Thu: 10:00 AM - 6:00 PM',
        subHours: 'Fri: Closed',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.792686457586!2d74.40040584051815!3d34.218658389008425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e107bb4fcc5273%3A0xa136762abec2ce06!2sAP%20DENTAL%20CLINIC%2C%20BARAMULLA!5e0!3m2!1sen!2sin!4v1768378130022!5m2!1sen!2sin'
    }
};





const Contact = () => {
    // ... hook logic ...

    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm({
        defaultValues: {
            location: 'baramulla'
        }
    });

    const selectedBranchKey = watch('location') || 'baramulla';
    const branch = branches[selectedBranchKey];

    const onSubmit = async (data) => {
        const message = `*New Appointment Request*:
- *Name*: ${data.name}
- *Phone*: ${data.phone}
- *Branch*: ${data.location === 'baramulla' ? 'Baramulla Branch' : 'Kanispora Branch'}
- *Date*: ${data.date}
- *Reason*: ${data.reason}
- *Message*: ${data.message || 'N/A'}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919541848030?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        reset();
    };


    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Contact Info */}
                    <div className={styles.info}>
                        <h1 className={styles.title} style={{ marginBottom: '1rem', color: '#0a192f', fontFamily: 'Libre Baskerville, serif' }}>Get in Touch</h1>
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
                                    <p className={styles.subtext}>Sat - Thu, 10am - 6pm</p>
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

                        {/* Map */}
                        <div className={styles.map}>
                            <iframe
                                src={branch.mapSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map of ${branch.name}`}
                            ></iframe>
                        </div>
                    </div>

                    {/* Appointment Form */}
                    <div className={styles.formWrapper}>
                        <h2>Book an Appointment</h2>
                        <p className={styles.formSubtitle}>Scheduling for {branch.name}</p>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                            <div className={styles.field}>
                                <label>Select Location</label>
                                <select {...register('location', { required: true })}>
                                    <option value="baramulla">Baramulla Branch</option>
                                    <option value="kanispora">Kanispora Branch</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label>Full Name</label>
                                <input {...register('name', { required: true })} placeholder="John Doe" />
                                {errors.name && <span className={styles.error}>Name is required</span>}
                            </div>

                            <div className={styles.field}>
                                <label>Phone Number</label>
                                <input {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} placeholder="9876543210" />
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
