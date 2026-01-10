import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Technology from './pages/About/Technology';
import MeetTheDoctor from './pages/MeetTheDoctor/MeetTheDoctor';
import Treatments from './pages/Treatments/Treatments';
import Orthodontics from './pages/Treatments/pages/Orthodontics';
import GeneralDentistry from './pages/Treatments/pages/GeneralDentistry';
import CosmeticDentistry from './pages/Treatments/pages/CosmeticDentistry';
import PreventiveCare from './pages/Treatments/pages/PreventiveCare';
import PatientExperience from './pages/PatientExperience/PatientExperience';
import Gallery from './pages/Gallery/Gallery';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Blog from './pages/Blog/Blog';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';
import PatientResources from './pages/PatientExperience/PatientResources';

function App() {
  return (
    <>
      <div className="app-layout">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="technology" element={<Technology />} />
            <Route path="doctor" element={<MeetTheDoctor />} />
            <Route path="treatments" element={<Treatments />} />
            <Route path="treatments/orthodontics" element={<Orthodontics />} />
            <Route path="treatments/general" element={<GeneralDentistry />} />
            <Route path="treatments/cosmetic" element={<CosmeticDentistry />} />
            <Route path="treatments/preventive" element={<PreventiveCare />} />
            <Route path="experience" element={<PatientExperience />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="blog" element={<Blog />} />
            <Route path="resources" element={<PatientResources />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
