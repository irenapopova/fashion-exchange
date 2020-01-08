import React from 'react'
var ReactDOM = require('react-dom');
var CustomNavigation = require('customNavigation').CustomNavigation;

// ! Arrow function ES7
const Categories = () => {
    return (
        <div className="featured-product has-carousel clearfix">
            <h3>New Products</h3>
            <div className="customNavigation"><a className="prev"><i className="fa fa-angle-left round-icon"></i></a><a className="next"><i className="fa fa-angle-right round-icon"></i></a></div>

            );
        }
        
export default CustomNavigation;