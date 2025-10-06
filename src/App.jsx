import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Judges from './components/Judges';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQs from './components/FAQs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Countdown targetDate="2025-11-15T00:00:00" />
      <About />
      <Tracks />
      <Schedule />
      {/* <Judges /> */}
      <Prizes />
      {/* <Sponsors /> */}
      <FAQs />
      {/* <Gallery /> */}
      <Contact />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;