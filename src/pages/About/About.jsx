import Story from './components/Story';
import Philosophy from './components/Philosophy';
import Timeline from './components/Timeline';
import Standards from './components/Standards';

const About = () => {
    return (
        <div className="page-about">
            {/* Optional Page Header could go here */}
            <div style={{ paddingTop: '4rem', textAlign: 'center', backgroundColor: '#F8F9FA', paddingBottom: '4rem' }}>
                <h1 className="text-primary" style={{ fontSize: '3rem' }}>About AP Dental</h1>
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
