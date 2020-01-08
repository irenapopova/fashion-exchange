import React from 'react'
var ReactDOM = require('react-dom');
//var ImgBanner = require('ImgBanner').ImgBanner;


const ImgBanner = () => {
    return (
        <div className="row banner-block clearfix hidden-sm margin-20">
            <div className="col-md-4 banner-item hidden-sm hidden-xs">
                <div className="img-wrapper"><img src="images/banner01.jpg" className="img-responsive" /><span className="triangle"></span>
                    <div className="titles">
                        <p className="title01">free shipping</p>
                        <p className="title02">on orders</p>
                        <p className="title03">over  €120</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 banner-item hidden-sm hidden-xs">
                <div className="img-wrapper"><img src="images/banner02.jpg" className="img-responsive" /><span className="triangle"></span>
                    <div className="titles">
                        <p className="title01">free shipping</p>
                        <p className="title02">on orders</p>
                        <p className="title03">over €120</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 banner-item hidden-sm hidden-xs">
                <div className="img-wrapper"><img src="images/banner03.jpg" className="img-responsive" /><span className="triangle"></span>
                    <div className="titles">
                        <p className="title01">free shipping</p>
                        <p className="title02">on orders</p>
                        <p className="title03">over €120</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ImgBanner;