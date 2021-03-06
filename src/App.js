import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './Components/Header';
import ImgCarousel from './Components/ImgCarousel'
import Categories from './Components/Categories';
import ImgBanner from './Components/ImgBanner';
import ProductCarousel from './Components/ProductCarousel';
import YouHaveVisited from './Components/YouHaveVisited';
import TagCloud from './Components/TagCloud';
import ProductDetail from './Components/ProductDetail';
import Wall from './Components/Wall';


function App() {

  const newproducts = [
    {
      image: "images/pro-24.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    },
    {
      image: "images/pro-25.jpg",
      title: "Princess Floor-Length Shoulder Chiffon Dress",
      sale: true
    },
    {
      image: "images/pro-26.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    },
    {
      image: "images/pro-27.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    },
    {
      image: "images/pro-27.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    }

  ]

  const newcollection = [
    {
      image: "images/pro-26.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    },

    {
      image: "images/pro-26.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: false
    },
    {
      image: "images/pro-27.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    },
    {
      image: "images/pro-27.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: false
    }
  ]

  return (
    <Router>

      <div className="App">

        <Header />

        <div className="main">

          <div className="sideBar" >
            <div id="sideBar-div-1">

              <Categories></Categories>

            </div>


            <TagCloud></TagCloud>

            <YouHaveVisited></YouHaveVisited>


          </div>
          <div className="wall">

            <div id="carouselContainer">

              <ImgCarousel />
              <ImgBanner />
              <ProductCarousel
                title="New Products Hi"
                products={newproducts}
              />

              <ProductCarousel
                title="New Collection"
                products={newcollection}
              />



            </div>
          </div>


        </div>
        <Switch>
          <Route path="/" children={<Wall />} exact />
          <Route path="/products/:id" children={<ProductDetail />} />
        </Switch>

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



      </div>
    </Router>
  );
}

export default App;
