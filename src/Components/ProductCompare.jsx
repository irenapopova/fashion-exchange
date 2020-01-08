import React from 'react'

const ProductCompare = () => {
    return (

        <body className="compare">
            <div className="container">
                <header className="header-section">
                    <div className="header-inner">
                        <div className="logo-block clearfix">
                            <div className="logo-wrapper"><a href="index.html">Fashion Shop</a></div>
                        </div>
                        <div id="dl-menu" className="dl-menuwrapper visible-xs pull-right">
                            <button className="dl-trigger"><i className="fa fa-reorder"></i></button>
                            <ul className="dl-menu">
                                <li className="active"><a href="index.html" title="Home">Home</a>
                                </li>
                                <li><a href="javascript:void(0);" title="Women">Women</a>
                                </li>
                                <li><a href="javascript:void(0);" title="Men">Men</a>
                                </li>
                                <li><a href="javascript:void(0);" title="Template pages">Template pages</a>
                                    <ul className="dl-submenu">
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