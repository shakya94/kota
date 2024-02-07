import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: 'white', padding: '20px' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-4 padding="30px"'>
              <h3 className='fw-bold'>
                Dr Rahul Astro Homeopathic & Research Center
              </h3>
              Dr Rahul Astro Homeopathic & Research Center is India's fastest-growing Homeopathy Clinic. We offer our services through a Physical Clinic and TeleClinic.

          </div>
          <div className='col-4'>
            <h3 className='fw-bold'>Location</h3>
            <ul className='list-unstyled'>
              <li>Mumbai</li>
              <li>Delhi</li>
              <li>Chennai</li>
            </ul>
          </div>
          <div className='col-4'>
            <h3 className='fw-bold'>Disease</h3>
            <ul className='list-unstyled'>
              <li>Skin Disorders</li>
              <li>Respiratory Ailments</li>
              <li>Arthritis</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

