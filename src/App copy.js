import React from 'react';
import './App.css';
import Header from './Components/Header';
import ImgCarousel from './Components/ImgCarousel'
import Categories from './Components/Categories';
import ImgBanner from './Components/ImgBanner';
import ProductCarousel from './Components/ProductCarousel';
import YouHaveVisited from './Components/YouHaveVisited';
import TagCloud from './Components/TagCloud';

function App() {

  return (
    <div className="App">
      <Header />

      <div className="main">

        <div className="sideBar" >
          <div id="sideBar-div-1">
            <div className="sideBar-1">
              <h4>CATEGORIES</h4>
            </div>
            <Categories></Categories>

          </div>


          <h4>TagCloud</h4>
          <TagCloud></TagCloud>


        </div>
        <div className="wall">

          <div id="carouselContainer">

            <ImgCarousel />
            <ImgBanner />
            <ProductCarousel />

          </div>
        </div>


      </div>


      <div className="footer">

        <div id="footer-div-1">
          <div id="footer-column1">
            <h4>CUSTOMER SERVICE</h4>

          </div>

          <div id="footer-column2">
            <h4>CUSTOMER SERVICE</h4>
          </div>

          <div id="footer-column3">
            <h4>CUSTOMER SERVICE</h4>

          </div>
          <div id="footer-column4">
            <h4>CONTACT US</h4>

          </div>

        </div>
        <div id="footer-div-2"> DIV TWO</div>

      </div>



    </div >
  );
}

export default App;
