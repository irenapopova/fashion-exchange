import React from 'react'
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';




const ProductDetail = () => {
  const { id } = useParams();
  const products = [
    {
      image: "images/pro-24.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    },
    {
      image: "images/pro-25.jpg",
      title: "Princess Floor-Length Shoulder Chiffon Dress",
      sale: true
    },
    {
      image: "images/pro-26.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    },
    {
      image: "images/pro-27.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    },
    {
      image: "images/pro-27.jpg",
      title: "Beautiful Strapless Sweetheart Slit Chiffon Pageant Dress",
      sale: true
    }

  ]

  return (
    <div>
      <h1>{products[id].title}</h1>
      <img src={products[id].image} />
    </div>
  )
}

export default ProductDetail;


/**
 * <div className="contentWrapper row">
  <div className="col-md-12">
    <div className="preview-block clearfix">
      <div className="product-preview col-md-4">
        <div className="big-image"><a href="#" className="elevatezoom"><img src="images/small/n14d0663px-4.jpg"
          data-zoom-image="images/large/n14d0663px-4.jpg" className="zoom fancybox img-respnsive"></a></div>
          <div id="gallery_01" className="thumbs"><a href="#" data-image="images/small/n14d0663px-4.jpg"
            data-zoom-image="images/large/n14d0663px-4.jpg" className="image-thumb active"><img
              src="images/small/n14d0663px-4.jpg" /></a><a href="#" data-image="images/small/n14d0663px-2.jpg"
                data-zoom-image="images/large/n14d0663px-2.jpg" className="image-thumb active"><img
                src="images/small/n14d0663px-2.jpg" /></a><a href="#" data-image="images/small/n14d0663px-4.jpg"
                  data-zoom-image="images/large/n14d0663px-4.jpg" className="image-thumb active"><img
                src="images/small/n14d0663px-4.jpg" /></a><a href="#" data-image="images/small/n14d0663px-6.jpg"
                  data-zoom-image="images/large/n14d0663px-6.jpg" className="image-thumb active"><img
                src="images/small/n14d0663px-6.jpg" /></a><a href="#" data-image="images/small/n14d0663px-7.jpg"
                  data-zoom-image="images/large/n14d0663px-7.jpg" className="image-thumb active"><img
                src="images/small/n14d0663px-7.jpg" /></a>
          </div>
        </div>
        <div className="product-details col-md-8">
          <div className="entry-header clearfix">
            <h3>One Shoulder Asymmetric Dress</h3>
            <div className="print-block"><i className="fa fa-print margin-r-10"></i><a href="javascript:void(0);"
              title="Print this page">Print this page</a>
            </div>
          </div>
          <article className="entry-content">
            <div className="rate-bar">
              <div className="rateit-selected"></div>
            </div><span className="entry-review-count">(14 Votes) </span><span> 15 orders</span>
            <ul className="info-details">
              <li><span>Price</span>
                <del className="value original-price">$59.80</del>
              </li>
              <li><span>Discount Price</span>$39.80<span className="discount">30% off</span></li>
              <li><span>Brand</span>Versace</li>
              <li><span>Availability</span>In Stock</li>
              <li><span>Product Code</span>GF-123456</li>
              <li className="colors"><span>Color</span>
                <label>
                  <input type="radio" name="color" /><b title="white" className="white"></b>
                </label>
                <label>
                  <input type="radio" name="color" /><b title="silver" className="silver"></b>
                </label>
                <label>
                  <input type="radio" name="color" /><b title="black" className="black"></b>
                </label>
                <label>
                  <input type="radio" name="color" /><b title="green" className="green"></b>
                </label>
                <label>
                  <input type="radio" name="color" /><b title="yellow" className="yellow"></b>
                </label>
                <label>
                  <input type="radio" name="color" /><b title="pink" className="pink"></b>
                </label>
                <label>
                  <input type="radio" name="color" /><b title="tomato" className="tomato"></b>
                </label>
                <label>
                  <input type="radio" name="color" /><b title="purple" className="purple"></b>
                </label>
                <label>
                  <input type="radio" name="color" /><b title="pattern" className="pattern"></b>
                </label>
              </li>
              <li className="sizes"><span>Size</span>
                <label>
                  <input type="radio" name="size" /><b title="XS" className="XS">XS</b>
                </label>
                <label>
                  <input type="radio" name="size" /><b title="S" className="S">S</b>
                </label>
                <label>
                  <input type="radio" name="size" /><b title="M" className="M">M</b>
                </label>
                <label>
                  <input type="radio" name="size" /><b title="L" className="L">L</b>
                </label>
                <label>
                  <input type="radio" name="size" /><b title="XL" className="XL">XL</b>
                </label>
                <label>
                  <input type="radio" name="size" /><b title="XLL" className="XLL">XLL</b>
                </label>
                <label>
                  <input type="radio" name="size" /><b title="XLLL" className="XLLL">XLLL</b>
                </label>
              </li>
              <li><span>Quantity</span>
                <input type="number" value="1">
      </li>
    </ul>
              <div className="row flex ad-block">
                <div className="col-md-6">
                  <div className="buy-protection-block clearfix"><img src="images/shield-icon.png" alt="" style=""
                    className="pull-left">
                    <h3>Buyer Protection</h3>
                    <div className="buy-protection-info">
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check"></i><strong>Full Refund</strong> if you dont receive your order</li>
                        <li><i className="fa fa-check"></i><strong>Refund or Keep</strong> items not as described</li>
                      </ul>
                    </div>
        </div>
                  </div>
                </div>


                <div className="button-group"><a href="#" className="btn-cta"><i className="fa fa-shopping-cart"></i> ADD TO
        CARD</a><a href="#" title="Add to Wishlist" className="btn-outline"><i className="fa fa-heart"></i></a><a
                    href="#" title="Add to Comapre" className="btn-outline"><i className="fa fa-retweet"></i></a></div>
  </article>
</div>
</div>
 */