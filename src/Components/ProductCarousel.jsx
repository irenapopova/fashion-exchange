import React from 'react'


const CarouselNavigation = ({ onPrev, onNext }) => {
    return (

        <div className="carouselNavigation">
            <a className="prev" onClick={onPrev}><i className="fa fa-angle-left round-icon"></i></a>
            <a className="next" onClick={onNext}><i className="fa fa-angle-right round-icon"></i></a>
        </div>
    )
}
const Product = ({ image, title, link, sale }) => {
    return (
        <div className="product">
            {sale && <div className="sale-icon">SALE</div>}
            <div className="photo-wrapper"><img src={image} alt="" className="img-responsive" />
                <div className="icon-style hidden-list hidden-sm hidden-xs"><a href="product_detail.html"
                    className="img-link"></a><a href="cart.html" title="Add to Cart"><i
                        className="fa fa-shopping-cart icon-01"></i></a><a href="my_account.html" title="Add to Wishlist"><i
                            className="fa fa-heart icon-02"></i></a><a href="compare_product.html" title="Add to Comapre"><i
                                className="fa fa-refresh icon-03"></i></a></div>
            </div>

            <div className="entry-main clearfix">
                <div className="rate-bar">
                    <div className="rateit-selected"></div>
                </div><span className="recent-order"><span className="order">325</span><span>&nbsp;orders</span></span>
                <h5 className="entry-title"><a href="#">{title}</a></h5>
                <s className="entry-discount">$380.00</s>&nbsp;<span className="price">$250.00</span>
            </div>
        </div>

    )


}
class ProductCarousel extends React.Component {

    constructor() {
        super()
        this.state = {
            x: 0
        }
    }
    render() {

        const products = this.props.products
        return (
            <div className="product-carousel-container">

                <div className="CarouselTitle">
                    <h3>{this.props.title || "New Product"}</h3>
                </div>

                <CarouselNavigation
                    onPrev={() => {
                        const newX = this.state.x - 1
                        if (newX >= 0)
                            this.setState({ x: this.state.x - 1 })
                    }
                    }
                    onNext={() => {
                        const newX = this.state.x + 1
                        if (newX < products.length - 2)
                            this.setState({ x: this.state.x + 1 })
                    }
                    }
                />
                <div className="product-carousel">
                    <div
                        className="product-carousel-inner-container"
                        style={{
                            "grid-template-columns": `repeat(${products.length}, 1fr)`,
                            width: `${100 * products.length / 3}%`,
                            transform: `translate(${this.state.x * -100 / products.length}%, 0px)`
                        }}>


                        {products.map(product =>

                            <Product
                                image={product.image}
                                title={product.title}
                                sale={product.sale}
                            />)}





















                        {/*
                    <div className="product">
                        <div className="photo-wrapper"><img src="images/pro-25.jpg" alt="" className="img-responsive" />
                            <div className="icon-style hidden-list hidden-sm hidden-xs"><a href="product_detail.html"
                                className="img-link"></a><a href="cart.html" title="Add to Cart"><i
                                    className="fa fa-shopping-cart icon-01"></i></a><a href="my_account.html" title="Add to Wishlist"><i
                                        className="fa fa-heart icon-02"></i></a><a href="compare_product.html" title="Add to Compare"><i
                                            className="fa fa-exchange icon-03"></i></a></div>
                        </div>
                        <div className="entry-main clearfix">
                            <div className="rate-bar">
                                <div className="rateit-selected"></div>
                            </div><span className="recent-order"><span className="order">210</span><span>&nbsp;orders</span></span>
                            <h5 className="entry-title"><a href="#">Princess Floor-Length Shoulder Chiffon Dress</a></h5>
                            <s className="entry-discount"></s>&nbsp;<span className="price">250.00</span>
                        </div>
                    </div>


                    <div className="product">
                        <div className="photo-wrapper"><img src="images/pro-26.jpg" alt="" className="img-responsive" />
                            <div className="icon-style hidden-list hidden-sm hidden-xs"><a href="product_detail.html"
                                className="img-link"></a><a href="cart.html" title="Add to Cart"><i
                                    className="fa fa-shopping-cart icon-01"></i></a><a href="my_account.html" title="Add to Wishlist"><i
                                        className="fa fa-heart icon-02"></i></a><a href="compare_product.html" title="Add to Compare"><i
                                            className="fa fa-refresh icon-03"></i></a></div>
                        </div>
                        <div className="entry-main clearfix">
                            <div className="rate-bar">
                                <div className="rateit-selected"></div>
                            </div><span className="recent-order"><span className="order">210</span><span>&nbsp;orders</span></span>
                            <h5 className="entry-title"><a href="#">Halter Rhinestone Sleeveless Cocktail Dresses</a></h5>
                            <s className="entry-discount"></s>&nbsp;<span className="price">250.00</span>
                        </div>
                    </div>


                    <div className="product">
                        <div className="photo-wrapper"><img src="images/pro-15.jpg" alt="" className="img-responsive" />
                            <div className="icon-style hidden-list hidden-sm hidden-xs"><a href="product_detail.html"
                                className="img-link"></a><a href="cart.html" title="Add to Cart"><i
                                    className="fa fa-shopping-cart icon-01"></i></a><a href="my_account.html" title="Add to Wishlist"><i
                                        className="fa fa-heart icon-02"></i></a><a href="compare_product.html" title="Add to Compare"><i
                                            className="fa fa-refresh icon-03"></i></a></div>
                        </div>
                        <div className="entry-main clearfix">
                            <div className="rate-bar">
                                <div className="rateit-selected"></div>
                            </div><span className="recent-order"><span className="order">210</span><span>&nbsp;orders</span></span>
                            <h5 className="entry-title"><a href="#">Princess Floor-Length Shoulder Chiffon Dress</a></h5>
                            <s className="entry-discount"></s>&nbsp;<span className="price">250.00</span>
                        </div>
                    </div>

                    <div className="product">
                        <div className="photo-wrapper"><img src="images/pro-20.jpg" alt="" className="img-responsive" />
                            <div className="icon-style hidden-list hidden-sm hidden-xs"><a href="product_detail.html"
                                className="img-link"></a><a href="cart.html" title="Add to Cart"><i
                                    className="fa fa-shopping-cart icon-01"></i></a><a href="my_account.html" title="Add to Wishlist"><i
                                        className="fa fa-heart icon-02"></i></a><a href="compare_product.html" title="Add to Compare"><i
                                            className="fa fa-refresh icon-03"></i></a></div>
                        </div>
                        <div className="entry-main clearfix">
                            <div className="rate-bar">
                                <div className="rateit-selected"></div>
                            </div><span className="recent-order"><span className="order">210</span><span>&nbsp;orders</span></span>
                            <h5 className="entry-title"><a href="#">Princess Floor-Length Shoulder Chiffon Dress</a></h5>
                            <s className="entry-discount"></s>&nbsp;<span className="price">250.00</span>
                        </div>
                    </div>


                    <div className="product">
                        <div className="photo-wrapper"><img src="images/pro-15.jpg" alt="" className="img-responsive" />
                            <div className="icon-style hidden-list hidden-sm hidden-xs"><a href="product_detail.html"
                                className="img-link"></a><a href="cart.html" title="Add to Cart"><i
                                    className="fa fa-shopping-cart icon-01"></i></a><a href="my_account.html" title="Add to Wishlist"><i
                                        className="fa fa-heart icon-02"></i></a><a href="compare_product.html" title="Add to Compare"><i
                                            className="fa fa-refresh icon-03"></i></a></div>
                        </div>

                        <div className="entry-main clearfix">
                            <div className="rate-bar">
                                <div className="rateit-selected"></div>
                            </div><span className="recent-order"><span className="order">210</span><span>&nbsp;orders</span></span>
                            <h5 className="entry-title"><a href="#">Princess Floor-Length Shoulder Chiffon Dress</a></h5>
                            <s className="entry-discount"></s>&nbsp;<span className="price">250.00</span>
                        </div>
                        



                    </div>
*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCarousel;
