import React from 'react'
var ReactDOM = require('react-dom');
//var ImgBanner = require('ImgBanner').ImgBanner;


const ImgBanner = () => {
    return (
        <div class="row banner-block clearfix hidden-sm margin-20">
            <div class="col-md-4 banner-item hidden-sm hidden-xs">
                <div class="img-wrapper"><img src="images/banner01.jpg" class="img-responsive" /><span class="triangle"></span>
                    <div class="titles">
                        <p class="title01">free shipping</p>
                        <p class="title02">on orders</p>
                        <p class="title03">over  €120</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 banner-item hidden-sm hidden-xs">
                <div class="img-wrapper"><img src="images/banner02.jpg" class="img-responsive" /><span class="triangle"></span>
                    <div class="titles">
                        <p class="title01">free shipping</p>
                        <p class="title02">on orders</p>
                        <p class="title03">over €120</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 banner-item hidden-sm hidden-xs">
                <div class="img-wrapper"><img src="images/banner03.jpg" class="img-responsive" /><span class="triangle"></span>
                    <div class="titles">
                        <p class="title01">free shipping</p>
                        <p class="title02">on orders</p>
                        <p class="title03">over €120</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ImgBanner;