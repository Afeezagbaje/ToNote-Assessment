import './App.css';
import React from 'react';

import Hero from './components/hero/Hero';
import EventSection from './components/events';
import Footer from './components/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Hero />
      <EventSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
