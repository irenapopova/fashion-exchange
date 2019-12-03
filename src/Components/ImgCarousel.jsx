import React from 'react';
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;




const ImgCarousel = () => {
    return (
        <div className="imgCarousel">
            <Carousel showArrows={true} showThumbs={false}>

                <div>
                    <img src="images/slice05.jpg" />

                </div>
                <div>
                    <img src="images/slice04.jpg" />

                </div>
                <div>
                    <img src="images/slice04.jpg" />

                </div>
                <div>
                    <img src="images/slice05.jpg" />

                </div>

            </Carousel>
        </div>
    );
}

export default ImgCarousel;