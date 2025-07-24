import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
