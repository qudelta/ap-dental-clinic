import styles from './Timeline.module.scss';

const milestones = [
    { year: '2012', title: 'Clinic Established', desc: 'Opened doors in Indiranagar with a single dental chair.' },
    { year: '2015', title: 'Advanced Orthodontics', desc: 'Introduced Invisalign and clear aligner therapies.' },
    { year: '2018', title: 'Digital Integration', desc: 'Became a fully digital clinic with OPG and intraoral scanners.' },
    { year: '2023', title: 'New Facility', desc: 'Moved to our current state-of-the-art center.' },
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
