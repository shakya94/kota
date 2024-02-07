import React from 'react';
import hospimain from './Images/hospimain.jpeg';
import './Imagecontainer.css'; // Import CSS file

function Imagecontainer() {
  return (
    <div className='contain'>
      <div className='img-contain'>
      <img
        src={hospimain}
        width="100%"
        alt="Im should"
      /> </div>
      <div className='texti'>
      <p>Health Care<br/> For Whole Family</p>
      </div>
      <button className='btn'>Book Appointment</button>
    </div>
  );
}

export default Imagecontainer;
