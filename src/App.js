import Navigation from './components/navbar/Navbar.js';
import Hero from './components/hero/Hero.js';
import PlantCollection from './components/plantCollection/Collection.js';
import About from './components/about/About.js';
import Indoor from './components/indoor/Indoor.js';
import Card from './components/activity/Card.js';
import Testimonial from './components/testimonial/Testimonial.js';
import NewsLetter from './components/newsletter/NewsLetter.js';
import Footer from './components/footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="">
      <Navigation />
       <Hero />
      <PlantCollection />
      <About />
      <Card />
      <Indoor />
      <Testimonial />
      <NewsLetter />
      <Footer /> 
    </div>
  );
}

export default App;
