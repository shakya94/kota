import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import hospimain from './components/Images/hospimain.jpeg';
import Footer from './components/Footer';
import Imagecontainer from './components/Imagecontainer';

function App() {
  return (
    <div>
      <Navbar />
      <Imagecontainer/>
      <Footer/>
    </div>
  );
}

export default App;
