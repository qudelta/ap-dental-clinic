import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link to="/" className={styles.logo}>
                    AP Dental
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
                    <div className={styles.links}>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/doctor">Our Team</NavLink>
                        <NavLink to="/treatments">Treatments</NavLink>
                        <NavLink to="/experience">Experience</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/testimonials">Stories</NavLink>
                    </div>
                    <NavLink to="/contact" className="btn btn-primary">Book Consultation</NavLink>
                </nav>

                {/* Mobile Toggle */}
                <div className={styles.mobileToggle} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                    <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                    <NavLink to="/doctor" onClick={toggleMenu}>Our Team</NavLink>
                    <NavLink to="/treatments" onClick={toggleMenu}>Treatments</NavLink>
                    <NavLink to="/experience" onClick={toggleMenu}>Experience</NavLink>
                    <NavLink to="/gallery" onClick={toggleMenu}>Gallery</NavLink>
                    <NavLink to="/contact" onClick={toggleMenu} className="btn btn-primary">Book Consultation</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
