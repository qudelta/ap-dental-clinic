import { useState } from 'react';
import styles from './FAQ.module.scss';
import { FaPlus, FaMinus, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = {
    'General Dentistry': [
        { q: 'How often should I visit the dentist?', a: 'It is generally recommended to visit the dentist every six months for a routine check-up and cleaning. However, your dentist may suggest more frequent visits depending on your oral health needs.' },
        { q: 'Why do I need dental x-rays?', a: 'X-rays help dentists diagnose problems not visible to the naked eye, such as decay between teeth, impact of trauma, bone loss, and issues with tooth roots.' },
        { q: 'What is the best way to brush my teeth?', a: 'Use a soft-bristled toothbrush and fluoride toothpaste. Brush at a 45-degree angle to your gums, using gentle circular motions for at least two minutes, twice a day.' },
        { q: 'How often should I replace my toothbrush?', a: 'You should replace your toothbrush or toothbrush head every 3 to 4 months, or sooner if the bristles become frayed.' },
        { q: 'What causes bad breath?', a: 'Bad breath can be caused by poor oral hygiene, dry mouth, gum disease, certain foods, tobacco use, or underlying medical conditions. Regular brushing and flossing help maintain fresh breath.' },
        { q: 'How does fluoride help my teeth?', a: 'Fluoride strengthens tooth enamel and makes it more resistant to decay. It can also reverse early signs of tooth decay.' },
        { q: 'What are dental sealants?', a: 'Sealants are thin, protective coatings applied to the chewing surfaces of back teeth (molars) to prevent cavities by sealing out food and bacteria.' },
        { q: 'Why do my gums bleed when I floss?', a: 'Bleeding gums can be a sign of gingivitis (early gum disease). If you floss regularly, the bleeding should stop as your gum health improves. If it persists, see your dentist.' },
        { q: 'Can I see a dentist if I am pregnant?', a: 'Yes, dental check-ups are safe and important during pregnancy. Hormonal changes can increase the risk of gum disease, so maintaining oral health is crucial.' },
        { q: 'What should I do if I have a toothache?', a: 'Rinse your mouth with warm water, floss gently to remove lodged food, and take over-the-counter pain relief if needed. Contact us immediately for an appointment.' }
    ],
    'Orthodontics (Braces & Aligners)': [
        { q: 'What is the best age for braces?', a: 'While orthodontic treatment can be done at any age, the ideal time for an initial evaluation is around age 7. Most treatments begin between ages 9 and 14.' },
        { q: 'How long do I need to wear braces?', a: 'The duration varies by individual, but most patients wear braces for 18 to 24 months. Complex cases may take longer.' },
        { q: 'Do braces hurt?', a: 'You may feel some discomfort or soreness for a few days after adjustments, but this is temporary and manageable with soft foods and pain relievers.' },
        { q: 'What foods should I avoid with braces?', a: 'Avoid sticky, hard, or chewy foods like caramel, popcorn, nuts, and hard candies, as they can damage wires and brackets.' },
        { q: 'What are Invisalign aligners?', a: 'Invisalign uses a series of clear, removable aligners to gradually straighten teeth. They are virtually invisible and can be removed for eating and cleaning.' },
        { q: 'Do I have to wear a retainer after braces?', a: 'Yes, retainers are essential to keep your teeth in their new positions. Without them, teeth naturally tend to shift back over time.' },
        { q: 'Can I play sports with braces?', a: 'Yes, but it is highly recommended to wear a special orthodontic mouthguard to protect your braces and teeth from injury.' },
        { q: 'How do I clean my teeth with braces?', a: 'Brush after every meal and floss daily using a floss threader or water flosser to remove food particles trapped around brackets and wires.' },
        { q: 'Are clear aligners faster than braces?', a: 'In some cases, clear aligners can be faster, but it depends on the complexity of the alignment issues. Your orthodontist will determine the best option for you.' },
        { q: 'What happens if a bracket comes loose?', a: 'If a bracket breaks or comes loose, cover any sharp edges with orthodontic wax and call our office to schedule a repair.' }
    ],
    'Cosmetic Dentistry': [
        { q: 'Does teeth whitening damage enamel?', a: 'No, professional teeth whitening is safe and does not damage enamel when performed under dental supervision.' },
        { q: 'How long does teeth whitening last?', a: 'Results can last from 6 months to 2 years, depending on your diet and oral hygiene habits. avoiding staining foods increases longevity.' },
        { q: 'What are porcelain veneers?', a: 'Veneers are thin, custom-made shells of tooth-colored porcelain designed to cover the front surface of teeth to improve appearance.' },
        { q: 'Can veneers fix crooked teeth?', a: 'Yes, widely known as "instant orthodontics," veneers can correct the appearance of minor misalignment, gaps, and crowding.' },
        { q: 'What is dental bonding?', a: 'Bonding involves applying a tooth-colored resin to repair decayed, chipped, fractured, or discolored teeth. It is a cost-effective cosmetic solution.' },
        { q: 'How do I maintain my veneers?', a: 'Treat them like natural teeth: brush and floss regularly, and avoid biting on hard objects like ice or fingernails to prevent chipping.' },
        { q: 'Is cosmetic dentistry covered by insurance?', a: 'Most cosmetic procedures are considered elective and are not covered by insurance, but restorative procedures with cosmetic benefits might be partially covered.' },
        { q: 'What is a smile makeover?', a: 'A smile makeover is a comprehensive treatment plan that combines multiple cosmetic procedures (like whitening, veneers, and implants) to achieve your ideal smile.' },
        { q: 'Can I replace my silver fillings with white ones?', a: 'Yes, old amalgam (silver) fillings can be replaced with composite resin (white) fillings for a more natural look.' },
        { q: 'Do veneers stain?', a: 'Porcelain veneers are highly stain-resistant, much more so than natural tooth enamel.' }
    ],
    'Surgical Procedures': [
        { q: 'What should I expect after a tooth extraction?', a: 'Some swelling and discomfort are normal. Follow post-op instructions carefully, such as biting on gauze and avoiding straws, to promote healing.' },
        { q: 'How long is the recovery for wisdom teeth removal?', a: 'Most patients recover fully within 3 to 5 days, though swelling may persist for a week. Full healing of the gum tissue takes about 3-4 weeks.' },
        { q: 'What are dental implants?', a: 'Implants are titanium posts surgically placed into the jawbone to act as artificial tooth roots, supporting replacement teeth like crowns or dentures.' },
        { q: 'Are dental implants painful?', a: 'The procedure is done under local anesthesia, so you shouldn\'t feel pain. Post-op discomfort is usually mild and manageable with medication.' },
        { q: 'How long do dental implants last?', a: 'With proper care and maintenance, dental implants can last a lifetime.' },
        { q: 'What is a bone graft?', a: 'A bone graft builds up bone volume in the jaw to ensure there is enough support for a dental implant.' },
        { q: 'Can I smoke after oral surgery?', a: 'No, smoking significantly slows healing and increases the risk of complications like dry socket. Avoid smoking for at least 72 hours.' },
        { q: 'What is a dry socket?', a: 'Dry socket occurs when the blood clot at the extraction site dislodges, exposing the bone and nerves. It is painful but treatable by your dentist.' },
        { q: 'When can I eat solid foods after surgery?', a: 'Stick to soft foods for the first few days. You can gradually reintroduce solid foods as your comfort allows, usually after 3-5 days.' },
        { q: 'Do I need to be put to sleep for surgery?', a: 'Not necessarily. Most procedures utilize local anesthesia, but sedation options are available for anxious patients or complex cases.' }
    ],
    'Pediatric Dentistry': [
        { q: 'When should my child first see a dentist?', a: 'The American Academy of Pediatric Dentistry recommends the first visit by age 1 or within 6 months of the first tooth eruption.' },
        { q: 'How can I prevent baby bottle tooth decay?', a: 'Avoid putting your baby to bed with a bottle containing juice, milk, or formula. Water is the safest option for bedtime.' },
        { q: 'Are baby teeth important?', a: 'Yes, baby teeth help children chew and speak, and they hold space for permanent teeth. Decay in baby teeth can affect permanent teeth.' },
        { q: 'What if my child knocks out a tooth?', a: 'If it\'s a permanent tooth, keep it moist (in milk or saliva) and see a dentist immediately. Baby teeth are generally not replanted.' },
        { q: 'How do I stop thumb sucking?', a: 'Most children stop on their own by age 4. If it persists, positive reinforcement or a dental appliance can help break the habit.' },
        { q: 'When should my child start flossing?', a: 'You should start flossing your child\'s teeth as soon as two teeth touch each other.' },
        { q: 'Are dental X-rays safe for children?', a: 'Yes, modern digital X-rays emit very low radiation and are considered safe. We take precautions to minimize exposure.' },
        { q: 'What is a space maintainer?', a: 'A device used to hold space open for a permanent tooth if a baby tooth is lost prematurely.' }
    ],

};

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const categories = ['All', ...Object.keys(faqData)];

    const getFilteredData = () => {
        let data = [];
        if (activeCategory === 'All') {
            // Flatten all categories into one array
            data = Object.values(faqData).flat();
        } else {
            data = faqData[activeCategory];
        }

        if (searchTerm) {
            data = data.filter(item =>
                item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.a.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return data;
    };

    const filteredData = getFilteredData();

    return (
        <div className={styles.faqPage}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Dental Health Knowledge Base
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Comprehensive answers to your dental questions.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        className={styles.searchWrapper}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                    </motion.div>
                </div>

                {/* Categories */}
                <div className={styles.categories}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={activeCategory === category ? styles.active : ''}
                            onClick={() => {
                                setActiveCategory(category);
                                setOpenIndex(null);
                                setSearchTerm('');
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className={styles.accordion}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeCategory + searchTerm}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                                    >
                                        <button className={styles.question} onClick={() => toggle(index)}>
                                            {item.q}
                                            <span className={styles.icon}>
                                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    className={styles.answer}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <p>{item.a}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))
                            ) : (
                                <div className={styles.noResults}>
                                    <p>No questions found matching satisfy your search.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
