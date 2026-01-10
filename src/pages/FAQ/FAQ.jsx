import { useState } from 'react';
import styles from './FAQ.module.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        category: 'General',
        items: [
            { q: 'Do you accept insurance?', a: 'We accept most major insurance providers. Please contact our front desk for a specific list.' },
            { q: 'What are your operating hours?', a: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM. We are closed on Sundays.' },
            { q: 'Is there parking available?', a: 'Yes, we have dedicated parking spots for patients right in front of the clinic.' }
        ]
    },
    {
        category: 'Treatments',
        items: [
            { q: 'Is teeth whitening safe?', a: 'Yes, professional teeth whitening is completely safe when done under dental supervision. It does not damage enamel.' },
            { q: 'How long do braces take?', a: 'Treatment time varies, but typically ranges from 12 to 24 months depending on the complexity of the case.' },
            { q: 'Do root canals hurt?', a: 'With modern anesthesia, a root canal is no more painful than getting a filling. It relieves the pain caused by infection.' }
        ]
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className={styles.title}>Frequently Asked Questions</h1>

                {faqs.map((section, sIdx) => (
                    <div key={sIdx} className={styles.section}>
                        <h2>{section.category}</h2>
                        <div className={styles.list}>
                            {section.items.map((item, i) => {
                                const key = `${sIdx}-${i}`;
                                const isOpen = openIndex === key;
                                return (
                                    <div key={key} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                                        <button className={styles.question} onClick={() => toggle(key)}>
                                            {item.q}
                                            <span className={styles.icon}>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                                        </button>
                                        <div className={styles.answer} style={{ maxHeight: isOpen ? '200px' : '0' }}>
                                            <p>{item.a}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
