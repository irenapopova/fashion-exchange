import React from 'react'
var ReactDOM = require('react-dom');
var CustomNavigation = require('customNavigation').CustomNavigation;

// ! Arrow function ES7
const Categories = () => {
    return (
        <div class="featured-product has-carousel clearfix">
            <h3>New Products</h3>
            <div class="customNavigation"><a class="prev"><i class="fa fa-angle-left round-icon"></i></a><a class="next"><i class="fa fa-angle-right round-icon"></i></a></div>

            );
        }
        
export default CustomNavigation;