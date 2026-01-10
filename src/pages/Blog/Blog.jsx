import styles from './Blog.module.scss';
import { Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: 'Invisalign vs. Braces: Which is right for you?',
        category: 'Orthodontics',
        date: 'Oct 12, 2025',
        excerpt: 'Deciding between clear aligners and traditional metal braces can be tricky. Here is a comprehensive guide to help you choose.'
    },
    {
        id: 2,
        title: '7 Tips for Your Child’s First Dental Visit',
        category: 'Pediatric',
        date: 'Sep 28, 2025',
        excerpt: 'The first dental visit sets the tone for your child’s oral health journey. Learn how to make it a positive, fear-free experience.'
    },
    {
        id: 3,
        title: 'Why do gums bleed? Causes and Treatments',
        category: 'General Health',
        date: 'Sep 15, 2025',
        excerpt: 'Bleeding gums are often an early sign of gum disease. Find out why it happens and what you can do to stop it.'
    }
];

const Blog = () => {
    return (
        <div className={styles.page}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>Smile Log</h1>
                <p className={styles.subtitle}>Insights, tips, and news from our expertise.</p>

                <div className={styles.grid}>
                    {posts.map(post => (
                        <div key={post.id} className={styles.card}>
                            <div className={styles.image}>Blog Image</div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span>{post.category}</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2>{post.title}</h2>
                                <p>{post.excerpt}</p>
                                <Link to="#" className={styles.link}>Read Article &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
