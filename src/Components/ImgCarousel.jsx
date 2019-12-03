import React from 'react';
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;




const ImgCarousel = () => {
    return (
        <Carousel showArrows={true}>
            <div>
                <img src="images/slice05.jpg" />

            </div>
            <div>
                <img src="images/slice04.jpg" />

            </div>
            <div>
                <img src="images/slice06.jpg" />

            </div>
            <div>
                <img src="images/slice05.jpg" />

            </div>

        </Carousel>
    );
}

export default ImgCarousel;