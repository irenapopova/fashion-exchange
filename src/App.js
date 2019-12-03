import React from 'react';
import './App.css';
import Header from './Components/Header';
import ImgCarousel from './Components/ImgCarousel'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div id="sideBar"></div>

        <div id="wall">

          <div id="carouselContainer">
            <ImgCarousel />

          </div>
        </div>



      </div>

      <div className="footer">
        <div id="footer-div-1">
          <div id="footer-column1">
            <h4>111111111</h4>
          </div>
          <div id="footer-column2">
            <h4>222222222</h4>

          </div>
          <div id="footer-column3">
            <h4>333333333</h4>

          </div>
          <div id="footer-column4">
            <h4>44444444</h4>

          </div>

        </div>
        <div id="footer-div-2"> DIV TWO</div>

      </div>

    </div>
  );
}

export default App;
