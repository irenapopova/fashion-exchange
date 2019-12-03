import React from 'react';
import './App.css';
import Header from './Components/Header';
import ImgCarousel from './Components/ImgCarousel'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <ImgCarousel />
      </div>

      <div className="footer">
        <p>this is my footer</p>
      </div>

    </div>
  );
}

export default App;
