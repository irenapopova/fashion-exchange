import React from 'react'
var ReactDOM = require('react-dom');
var ProductDetail = require('productDetail').ProductDetail;

const ProductDetail = () => {
  return (
    <div class="contentWrapper row">
      <div class="col-md-12">
        <div class="preview-block clearfix">
          <div class="product-preview col-md-4">
            <div class="big-image"><a href="#" class="elevatezoom"><img src="images/small/n14d0663px-4.jpg"
              data-zoom-image="images/large/n14d0663px-4.jpg" class="zoom fancybox img-respnsive"></a></div>
              <div id="gallery_01" class="thumbs"><a href="#" data-image="images/small/n14d0663px-4.jpg"
                data-zoom-image="images/large/n14d0663px-4.jpg" class="image-thumb active"><img
                  src="images/small/n14d0663px-4.jpg" /></a><a href="#" data-image="images/small/n14d0663px-2.jpg"
                    data-zoom-image="images/large/n14d0663px-2.jpg" class="image-thumb active"><img
                    src="images/small/n14d0663px-2.jpg" /></a><a href="#" data-image="images/small/n14d0663px-4.jpg"
                      data-zoom-image="images/large/n14d0663px-4.jpg" class="image-thumb active"><img
                    src="images/small/n14d0663px-4.jpg" /></a><a href="#" data-image="images/small/n14d0663px-6.jpg"
                      data-zoom-image="images/large/n14d0663px-6.jpg" class="image-thumb active"><img
                    src="images/small/n14d0663px-6.jpg" /></a><a href="#" data-image="images/small/n14d0663px-7.jpg"
                      data-zoom-image="images/large/n14d0663px-7.jpg" class="image-thumb active"><img
                    src="images/small/n14d0663px-7.jpg" /></a>
              </div>
            </div>
            <div class="product-details col-md-8">
              <div class="entry-header clearfix">
                <h3>One Shoulder Asymmetric Dress</h3>
                <div class="print-block"><i class="fa fa-print margin-r-10"></i><a href="javascript:void(0);"
                  title="Print this page">Print this page</a>
                </div>
              </div>
              <article class="entry-content">
                <div class="rate-bar">
                  <div class="rateit-selected"></div>
                </div><span class="entry-review-count">(14 Votes) </span><span> 15 orders</span>
                <ul class="info-details">
                  <li><span>Price</span>
                    <del class="value original-price">$59.80</del>
                  </li>
                  <li><span>Discount Price</span>$39.80<span class="discount">30% off</span></li>
                  <li><span>Brand</span>Versace</li>
                  <li><span>Availability</span>In Stock</li>
                  <li><span>Product Code</span>GF-123456</li>
                  <li class="colors"><span>Color</span>
                    <label>
                      <input type="radio" name="color" /><b title="white" class="white"></b>
                    </label>
                    <label>
                      <input type="radio" name="color" /><b title="silver" class="silver"></b>
                    </label>
                    <label>
                      <input type="radio" name="color" /><b title="black" class="black"></b>
                    </label>
                    <label>
                      <input type="radio" name="color" /><b title="green" class="green"></b>
                    </label>
                    <label>
                      <input type="radio" name="color" /><b title="yellow" class="yellow"></b>
                    </label>
                    <label>
                      <input type="radio" name="color" /><b title="pink" class="pink"></b>
                    </label>
                    <label>
                      <input type="radio" name="color" /><b title="tomato" class="tomato"></b>
                    </label>
                    <label>
                      <input type="radio" name="color" /><b title="purple" class="purple"></b>
                    </label>
                    <label>
                      <input type="radio" name="color" /><b title="pattern" class="pattern"></b>
                    </label>
                  </li>
                  <li class="sizes"><span>Size</span>
                    <label>
                      <input type="radio" name="size" /><b title="XS" class="XS">XS</b>
                    </label>
                    <label>
                      <input type="radio" name="size" /><b title="S" class="S">S</b>
                    </label>
                    <label>
                      <input type="radio" name="size" /><b title="M" class="M">M</b>
                    </label>
                    <label>
                      <input type="radio" name="size" /><b title="L" class="L">L</b>
                    </label>
                    <label>
                      <input type="radio" name="size" /><b title="XL" class="XL">XL</b>
                    </label>
                    <label>
                      <input type="radio" name="size" /><b title="XLL" class="XLL">XLL</b>
                    </label>
                    <label>
                      <input type="radio" name="size" /><b title="XLLL" class="XLLL">XLLL</b>
                    </label>
                  </li>
                  <li><span>Quantity</span>
                    <input type="number" value="1">
          </li>
        </ul>
                  <div class="row flex ad-block">
                    <div class="col-md-6">
                      <div class="buy-protection-block clearfix"><img src="images/shield-icon.png" alt="" style=""
                        class="pull-left">
                        <h3>Buyer Protection</h3>
                        <div class="buy-protection-info">
                          <ul class="list-unstyled">
                            <li><i class="fa fa-check"></i><strong>Full Refund</strong> if you don't receive your order</li>
                            <li><i class="fa fa-check"></i><strong>Refund or Keep</strong> items not as described</li>
                          </ul>
                        </div>
            </div>
                      </div>
                    </div>


                    <div class="button-group"><a href="#" class="btn-cta"><i class="fa fa-shopping-cart"></i> ADD TO
            CARD</a><a href="#" title="Add to Wishlist" class="btn-outline"><i class="fa fa-heart"></i></a><a
                        href="#" title="Add to Comapre" class="btn-outline"><i class="fa fa-retweet"></i></a></div>
      </article>
    </div>
  </div>
              );
              }
              export default ProductDetail;

          //* my notes   *//
              // TODO: to figure out what causes the brake 🤔
              // ! Have to check in the console 
              // ? what to do next ?
              // * What should I do to solve the error?
    // ?