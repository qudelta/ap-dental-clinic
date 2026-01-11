import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import DoctorHighlight from './components/DoctorHighlight';
import ClinicEnvironment from './components/ClinicEnvironment';
import Testimonials from './components/Testimonials';
import BeforeAfter from './components/BeforeAfter';
import Locations from './components/Locations';
import CallToAction from './components/CallToAction';

const Home = () => {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <Services />
            <DoctorHighlight />
            <ClinicEnvironment />
            <Testimonials />
            <BeforeAfter />
            <Locations />
            <CallToAction />
        </>
    );
};

export default Home;
