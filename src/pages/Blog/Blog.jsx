import styles from './Blog.module.scss';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import { FaCalendar, FaTag, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className={styles.page}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Smile Log</h1>
                    <p className={styles.subtitle}>Expert insights, dental tips, and clinic news to help you maintain a healthy smile.</p>
                </div>

                <div className={styles.grid}>
                    {blogPosts.map(post => (
                        <div key={post.id} className={styles.card}>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.category}><FaTag /> {post.category}</span>
                                    <span className={styles.date}><FaCalendar /> {post.date}</span>
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <Link to={`/blog/${post.slug}`} className={styles.link}>
                                    Read Article <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
