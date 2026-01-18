
import Story from './components/Story';
import Philosophy from './components/Philosophy';
import Timeline from './components/Timeline';
import Standards from './components/Standards';
import PageHeader from '../../components/common/PageHeader';

const About = () => {
    return (
        <div className="page-about">
            {/* Simple Text Header */}
            <div style={{ paddingTop: '8rem', textAlign: 'center', paddingBottom: '4rem' }}>
                <h1 className="text-primary" style={{ fontSize: '3rem', fontFamily: 'Libre Baskerville, serif' }}>Our Story</h1>
                <p>Excellence in Orthodontics & Family Dentistry</p>
            </div>
            <Story />
            <Philosophy />
            <Timeline />
            <Standards />
        </div>
    );
};

export default About;
