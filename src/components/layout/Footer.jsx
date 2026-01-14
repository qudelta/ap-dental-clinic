import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Column 1: Brand & About */}
                    <div className={styles.col}>
                        <div className={styles.brand}>
                            <img src="/logo-transparent.png" alt="AP Dental" className={styles.logoImg} />
                        </div>
                        <p className={styles.about}>
                            AP Dental Clinic - A premier orthodontic and dental care center providing specialized treatments in a calm, ethical environment.
                        </p>
                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/apdental_clinic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://wa.me/919541848030" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.col}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/technology">Our Technology</Link></li>
                            <li><Link to="/doctor">Meet Our Doctors</Link></li>
                            <li><Link to="/experience">Patient Experience</Link></li>
                            <li><Link to="/resources">Patient Resources</Link></li>
                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="/blog">Smile Log (Blog)</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className={styles.col}>
                        <h3>Our Services</h3>
                        <ul>
                            <li><Link to="/treatments/orthodontics">Orthodontics</Link></li>
                            <li><Link to="/treatments/general">General Dentistry</Link></li>
                            <li><Link to="/treatments/cosmetic">Cosmetic Dentistry</Link></li>
                            <li><Link to="/treatments/preventive">Preventive Care</Link></li>
                            <li><Link to="/treatments/general">Root Canal</Link></li>
                            <li><Link to="/treatments/cosmetic">Teeth Whitening</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Baramulla Branch */}
                    <div className={styles.col}>
                        <h3>Baramulla Branch</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <FaMapMarkerAlt className={styles.icon} />
                                <span>1st Floor, Mint Business Centre,<br />Baramulla, Jammu & Kashmir</span>
                            </li>
                            <li>
                                <FaPhone className={styles.icon} />
                                <span>+91 95418 48030</span>
                            </li>
                            <li>
                                <FaClock className={styles.icon} />
                                <span>Mon - Sat: 10AM - 8PM<br />Sun: Closed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Kanispora Branch */}
                    <div className={styles.col}>
                        <h3>Kanispora Branch</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <FaMapMarkerAlt className={styles.icon} />
                                <span>National Highway,<br />Kanispora, Jammu & Kashmir</span>
                            </li>
                            <li>
                                <FaPhone className={styles.icon} />
                                <span>+91 95418 48030</span>
                            </li>
                            <li>
                                <FaEnvelope className={styles.icon} />
                                <span>appointments@apdental.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} AP Dental Clinic. All rights reserved.</p>
                    <div className={styles.bottomLinks}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                    <div className={styles.credit}>
                        <span>Designed & Developed by <a href="https://qudeltastudios.com" target="_blank" rel="noopener noreferrer">Qudelta Studios</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
