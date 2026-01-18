import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './PageHeader.module.scss';

const PageHeader = ({ title, subtitle, bgImage }) => {
    return (
        <section
            className={styles.header}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.content}
                >
                    <h1 className={styles.title}>{title}</h1>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </motion.div>
            </div>
        </section>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    bgImage: PropTypes.string.isRequired
};

export default PageHeader;
