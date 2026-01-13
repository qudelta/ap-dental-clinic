import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import styles from './BlogPost.module.scss';
import { FaArrowLeft, FaCalendar, FaTag } from 'react-icons/fa';
import { useEffect } from 'react';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className={styles.page}>
            <div className={`container ${styles.container}`}>
                <Link to="/blog" className={styles.backLink}>
                    <FaArrowLeft /> Back to Articles
                </Link>

                <article className={styles.article}>
                    <header className={styles.header}>
                        <div className={styles.meta}>
                            <span className={styles.category}><FaTag /> {post.category}</span>
                            <span className={styles.date}><FaCalendar /> {post.date}</span>
                        </div>
                        <h1 className={styles.title}>{post.title}</h1>
                    </header>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
