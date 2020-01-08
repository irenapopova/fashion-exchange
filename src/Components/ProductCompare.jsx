import React from 'react'
var ReactDOM = require('react-dom');

const ProductCompare = () => {
    return (

        <body class="compare">
        <div class="container">
          <header class="header-section">
            <div class="header-inner">
              <div class="logo-block clearfix">
                <div class="logo-wrapper"><a href="index.html">Fashion Shop</a></div>
              </div>
              <div id="dl-menu" class="dl-menuwrapper visible-xs pull-right">
                <button class="dl-trigger"><i class="fa fa-reorder"></i></button>
                      <ul class="dl-menu">
                              <li class="active"><a href="index.html" title="Home">Home</a>
                              </li>
                              <li><a href="javascript:void(0);" title="Women">Women</a>
                              </li>
                              <li><a href="javascript:void(0);" title="Men">Men</a>
                              </li>
                              <li><a href="javascript:void(0);" title="Template pages">Template pages</a>
                                      <ul class="dl-submenu">
                                              <li><a href="product.html" title="Products grid listing">Products grid listing</a>
                                              </li>
                                              <li><a href="product-detail.html" title="Product detail page">Product detail page</a>
                                              </li>
                                              <li><a href="compare.html" title="Compare products">Compare products</a>
                                              </li>
                                              <li><a href="blog.html" title="Blog page">Blog page</a>
                                              </li>
                                              <li><a href="cart.html" title="Cart page">Cart page</a>
                                              </li>
                                      </ul>
                              </li>
                      </ul>
              </div>





        );
}
export default ProductCompare;