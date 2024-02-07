import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import hospimain from './components/Images/hospimain.jpeg';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div>
      <img
        src={hospimain}
        alt="img should"
        style={{ width: '100%', maxHeight: '600px', filter: 'blur(5px)' }}
      />
      <button classname="position:absolute" onClick="/">Book Appointment</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
