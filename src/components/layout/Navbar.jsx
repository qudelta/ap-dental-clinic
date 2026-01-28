import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
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
                <Link to="/" className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
                    <img src="/logo-transparent.png" alt="AP Dental" className={styles.logoImg} />
                    <span className={styles.brandText}>AP Dental</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <div className={styles.links}>
                        <NavLink to="/doctor" className={({ isActive }) => isActive ? styles.active : ''}>Our Doctors</NavLink>

                        {/* Treatments Dropdown */}
                        <div className={styles.dropdown}>
                            <NavLink
                                to="/treatments"
                                className={({ isActive }) => `${styles.dropdownTrigger} ${isActive ? styles.active : ''}`}
                            >
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

                        <NavLink to="/experience" className={({ isActive }) => isActive ? styles.active : ''}>Experience</NavLink>
                        <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.active : ''}>Gallery</NavLink>
                        <NavLink to="/faq" className={({ isActive }) => isActive ? styles.active : ''}>FAQ</NavLink>
                        <NavLink to="/testimonials" className={({ isActive }) => isActive ? styles.active : ''}>Stories</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? styles.active : ''}>Blog</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>Our Story</NavLink>
                    </div>

                    <div className={styles.ctas}>
                        <NavLink to="/contact" className={styles.navButton}>Book Consultation</NavLink>
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
                            <NavLink to="/doctor" onClick={closeMenu}>Our Doctors</NavLink>
                            <NavLink to="/treatments" onClick={closeMenu}>Treatments</NavLink>
                            <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
                            <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
                            <NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink>
                            <NavLink to="/testimonials" onClick={closeMenu}>Stories</NavLink>
                            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
                            <NavLink to="/about" onClick={closeMenu}>Our Story</NavLink>

                            <a href="tel:+919541848030" onClick={closeMenu} className={styles.mobilePhone}>
                                <FaPhone /> Call Us
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
