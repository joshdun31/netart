import React from 'react';
import './App.css';
import logo from './asserts/logo.png'
import cup from './asserts/1.png'
import award from './asserts/2.png'
import motor from './asserts/3.png'
import 'boxicons'
// import whole from './asserts/ToBeConverted.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo"></img>
      </header>
      <div className="main-content">
        <div className="App-grid">
          <div className="App-col1">
          <img src={cup} alt="Cup"></img>
          </div>
          <div className="App-col2">
            <div className="App-col2-content">
              <h5>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
              <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
              </ul>
              <img src={award} alt="Award"></img>
              <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
          </div>
        </div>
        <p className="last-para">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      </div>
        <div className="content2">
          <div className="content2-inside">
          <div className="App-motor">
          <img src={motor} alt="Motors" ></img>
          </div>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          </div>
        </div>
        <div className='divider'>
          <hr></hr>
        </div>
      <div className="content3">
          <div className="content3-inside">
            <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
            <p>CHEMICALS & PROCESS<span> | </span>POWER<span> | </span>WATER & WASTE WATER<span> | </span>OILS & GAS<span> | </span> PHARMA<span> | </span> SUGARS & DISTILLERIES<span> | </span> PAPER & PULP<span> | </span> MARINE & DEFENCE<span> | </span> METAL & MINING<span> | </span> FOOD & BEVERAGE<span> | </span> PETROCHEMICAL & REFINERIES<span> | </span> SOLAR<span> | </span> BUILDING<span> | </span> HVAC<span> | </span> FIRE FIGHTING<span> | </span> AGRICULTURE & RESIDENTIAL</p>
          </div>
        </div>

      <div className="footer">
        <div><box-icon type="solid" name="phone" color="white"></box-icon><a href="tel:180020001234">Toll free 1800 2000 1234</a></div>
        <div><box-icon type='logo' name='facebook-circle' color="white"></box-icon><a href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a></div>
        <div><box-icon name="globe" color="white"></box-icon><a href="https://www.crigroups.com">www.crigroups.com</a></div>
      </div>
      </div>
  );
}

export default App;
