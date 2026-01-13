import styles from './Timeline.module.scss';

const milestones = [
    { year: '2019', title: 'Clinic Established', desc: 'Opened doors in Kanispora with a vision for excellence.' },
    { year: '2021', title: 'Advanced Orthodontics', desc: 'Introduced Invisalign and digital aligner therapies.' },
    { year: '2023', title: 'Digital Integration', desc: 'Became a fully digital clinic with OPG and intraoral scanners.' },
    { year: '2026', title: 'Expansion', desc: 'Opened our new branch at Mint Business Centre, Baramulla.' },
];

const Timeline = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Our Journey</h2>
                <div className={styles.timeline}>
                    {milestones.map((m, i) => (
                        <div key={i} className={styles.item}>
                            <div className={styles.marker}></div>
                            <div className={styles.content}>
                                <span className={styles.year}>{m.year}</span>
                                <h3 className={styles.title}>{m.title}</h3>
                                <p className={styles.desc}>{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
