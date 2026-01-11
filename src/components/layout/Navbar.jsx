import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaTooth } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const treatmentItems = [
        { name: 'Orthodontics', path: '/treatments/orthodontics', icon: '🦷' },
        { name: 'General Dentistry', path: '/treatments/general', icon: '⚕️' },
        { name: 'Cosmetic Dentistry', path: '/treatments/cosmetic', icon: '✨' },
        { name: 'Preventive Care', path: '/treatments/preventive', icon: '🛡️' }
    ];

    return (
        <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link to="/" className={styles.logo}>
                    <FaTooth className={styles.logoIcon} />
                    <span>AP Dental</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <div className={styles.links}>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/doctor">Our Team</NavLink>

                        {/* Treatments Dropdown - CSS-only hover */}
                        <div className={styles.dropdown}>
                            <NavLink to="/treatments" className={styles.dropdownTrigger}>
                                Treatments
                                <span className={styles.dropdownArrow}>▾</span>
                            </NavLink>

                            <div className={styles.dropdownMenu}>
                                {treatmentItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={styles.dropdownItem}
                                    >
                                        <span className={styles.dropdownIcon}>{item.icon}</span>
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <NavLink to="/experience">Experience</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/testimonials">Stories</NavLink>
                    </div>

                    <div className={styles.ctas}>
                        <a href="tel:+911234567890" className={styles.phoneLink}>
                            <FaPhone />
                            <span>+91 123-456-7890</span>
                        </a>
                        <NavLink to="/contact" className="btn btn-primary">Book Consultation</NavLink>
                    </div>
                </nav>

                {/* Mobile Menu Toggle - only show when menu is closed */}
                {!isOpen && (
                    <div className={styles.mobileToggle} onClick={toggleMenu}>
                        <FaBars />
                    </div>
                )}

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.mobileMenuContent}>
                        {/* Close button inside menu */}
                        <div className={styles.mobileMenuHeader}>
                            <span className={styles.menuTitle}>Menu</span>
                            <button className={styles.closeButton} onClick={closeMenu}>
                                <FaTimes />
                            </button>
                        </div>

                        <nav className={styles.mobileNav}>
                            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                            <NavLink to="/doctor" onClick={closeMenu}>Our Team</NavLink>
                            <NavLink to="/treatments" onClick={closeMenu}>Treatments</NavLink>
                            <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
                            <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
                            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
                            <NavLink to="/testimonials" onClick={closeMenu}>Stories</NavLink>

                            <a href="tel:+911234567890" className={styles.mobilePhone} onClick={closeMenu}>
                                <FaPhone /> +91 123-456-7890
                            </a>
                            <NavLink to="/contact" onClick={closeMenu} className={`${styles.mobileBookBtn} btn btn-primary`}>
                                Book Consultation
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
