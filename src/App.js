import React from 'react';
import Banner from './components/Banner';
import AboutUs from "./components/AboutUs";
import Locations from './components/Locations';
import Pricing from './components/Pricing';
import Member from './components/Member';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Locations />
      <Pricing />
      <Member />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
