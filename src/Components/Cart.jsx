import react from "react";


<body class="cart">
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
                <div class="sub-menu hidden-xs">
                    <div class="menu-item clearfix">
                        <ul class="unstyled-list option-list">
                            <li class="active"><a href="javascript:void(0);" title="$">$</a></li>
                            <li><a href="javascript:void(0);" title="£">£</a></li>
                            <li><a href="javascript:void(0);" title="€">€</a></li>
                        </ul>
                        <ul class="unstyled-list option-list">
                            <li class="active"><a href="javascript:void(0);" title="EN">EN</a></li>
                            <li><a href="javascript:void(0);" title="FR">FR</a></li>
                            <li><a href="javascript:void(0);" title="DE">DE</a></li>
                        </ul>
                    </div>
                    <div class="menu-item">
                        <ul class="unstyled-list menu-list center-xs">
                            <li><a href="account.html" title="My Account">My Account</a></li>
                            <li><a href="account.html" title="My Wishlist(3)">My Wishlist(3)</a></li>
                            <li><a href="compare.html" title="My Compare(2)">My Compare(2)</a></li>
                            <li><a href="cart.html" title="Checkout">Checkout</a></li>
                            <li><a href="register.html" title="Log Out">Log Out</a></li>
                        </ul>
                    </div>
                </div>
                <nav class="menu-block clearfix hidden-xs hidden-sm">
                    <ul class="main-menu unstyled-list">
                        <li><a href="index.html" title="">Home</a>
                        </li>
                        <li><a href="javascript:void(0);" title="">Women</a>
                        </li>
                        <li><a href="javascript:void(0);" title="">Men</a>
                        </li>
                        <li class="has-child"><a href="javascript:void(0);" title="">Template pages<b class='caret'></b></a>
                            <div class="dropdown-content mega-menu col-md-12">
                                <div class="col-md-3">
                                    <h4 class="menu-title">Common pages</h4>
                                    <ul class="unstyled-list">
                                        <li><a href="index.html" title="Home page">Home page</a></li>
                                        <li><a href="product.html" title="Products grid listing">Products grid listing</a></li>
                                        <li><a href="product-detail.html" title="Product detail page">Product detail page</a></li>
                                        <li><a href="compare.html" title="Compare products">Compare products</a></li>
                                        <li><a href="account.html#collapseThree" title="Wishlist page">Wishlist page</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <h4 class="menu-title">Cart pages</h4>
                                    <ul class="unstyled-list">
                                        <li><a href="javascript:void(0);" title="Emty cart">Emty cart</a></li>
                                        <li><a href="cart.html#cart" title="Checkout step 1">Checkout step 1</a></li>
                                        <li><a href="cart.html#address" title="Checkout step 2">Checkout step 2</a></li>
                                        <li><a href="cart.html#shipping" title="Checkout step 3">Checkout step 3</a></li>
                                        <li><a href="cart.html#summary" title="Checkout step 4">Checkout step 4</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <h4 class="menu-title">My pages</h4>
                                    <ul class="unstyled-list">
                                        <li><a href="register.html" title="Registration">Registration</a></li>
                                        <li><a href="account.html" title="My account">My account</a></li>
                                        <li><a href="blog.html" title="Blog listing">Blog listing</a></li>
                                        <li><a href="blog-detail.html" title="Blog detail">Blog detail</a></li>
                                        <li><a href="about.html" title="About us">About us</a></li>
                                        <li><a href="contact.html" title="Contact us">Contact us</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <div class="carousel">
                                        <div class="carousel-inner">
                                            <div class="item active"><img src="images/slide1.jpg" alt=""></div>
                                                <div class="item"><img src="images/slide2.jpg" alt=""></div>
                                                </div>
                                            </div>
                                            <h5>Lorem ipsum dolor sit, consectetur adipiscing elit. </h5><a href="#" class="btn-black">Go to Shop &rarr;</a>
                                        </div>
                                    </div>
                    </li>
                                <li><a href="about.html" title="">About us</a>
                                </li>
                                <li><a href="contact.html" title="">Contact us</a>
                                </li>
            </ul>
                            <div class="cart-block has-child pull-right"><a href="cart.html" class="cart-view"><i class="fa fa-shopping-cart"></i><span>My Cart: 4 item(s) - $ 790.00 </span></a>
                                <div class="sub-cart subHeader dropdown-content">
                                    <div class="cart-header text-center"><span class="empty-cart hide">Your cart is currently empty.</span><span>Displaying 2 of 4 items &nbsp;</span><a href="#">(See All)</a></div>
                                    <ul class="cart-items list-unstyled">
                                        <li class="item clearfix">
                                            <button class="close">&times;</button><a href="#" class="entry-thumbnail"><img src="images/pro-17.jpg" alt="pro-17" class="img-responsive"></a>
                                                <div class="info"><a href="#" class="entry-title">Halter Rhinestone Cocktail Dress</a><span class="entry-price">1 x $ 450.00</span></div>
                        </li>
                                            <li class="item clearfix">
                                                <button class="close">&times;</button><a href="#" class="entry-thumbnail"><img src="images/pro-21.jpg" alt="pro-21" class="img-responsive"></a>
                                                    <div class="info"><a href="#" class="entry-title">Sweetheart Slit Chiffon Pageant Dress</a><span class="entry-price">2 x $ 320.00</span></div>
                        </li>
                </ul>
                                            <div class="cart-total clearfix"><span class="pull-left">Total</span><span class="pull-right">$790</span></div><a href="cart.html" title="View Cart" class="btn-black pull-right">View Cart</a>
              </div>
            </div>
          </nav>
                            </div>
      </header>
                        <div class="breadcrumb-wrapper">
                            <ol class="breadcrumb">
                                <li><a href="index.html" title="Home">Home</a></li>
                                <li class="active">Cart page</li>
                            </ol>
                        </div>
                        <div class="contentWrapper row">
                            <div class="col-md-12">
                                <!-- Nav tabs-->
          <ul class="cart_nav nav nav-tabs">
                                    <li class="col-md-3 active"><a href="#cart" data-toggle="tab">Shopping cart</a></li>
                                    <li class="col-md-3"><a href="#address" data-toggle="tab">Delivery address</a></li>
                                    <li class="col-md-3"><a href="#shipping" data-toggle="tab">Shipping / payment</a></li>
                                    <li class="col-md-3"><a href="#summary" data-toggle="tab">Summary</a></li>
                                </ul>
                            </div>
                            <div class="col-md-12">
                                <!-- Tab panes-->
          <div class="tab-content cart_content">
                                    <div id="cart" class="tab-pane clearfix active">
                                        <table class="tbl-cart">
                                            <tr>
                                                <th>Product Name</th>
                                                <th width="15%" class="hidden-xs">Options</th>
                                                <th width="15%" class="hidden-xs">Unit Price</th>
                                                <th width="15%" class="hidden-xs">Quantity</th>
                                                <th width="15%">Sub Total</th>
                                            </tr>
                                            <tr>
                                                <td><a href="javascript:void(0);" class="cart-thumbnail"><img src="images/pro-20.jpg" alt="A Line Layered Evening Dress Floor Length Sweetheart Neck Taffeta Empire Prom Dress" class="img-responsive" /></a>
                                                    <h5><a href="" class="cart-title">A Line Layered Evening Dress Floor Length Sweetheart Neck Taffeta Empire Prom Dress</a></h5>
                                                    <p class="grey-color">Order No. 9479976560 - 91</p>
                                                </td>
                                                <td class="hidden-xs">
                                                    <p><span>Brand:</span> Levise</p>
                                                    <p><span>Color:</span>Black</p>
                                                    <p><span>Size:</span>S</p>
                                                </td>
                                                <td class="hidden-xs"><span class="unit-price">$350.00</span></td>
                                                <td class="hidden-xs">
                                                    <input type="number" value="3" />
                                                </td>
                                                <td class="hidden-xs">
                                                    <button type="button" class="close hidden-xs">×</button><span>$350.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="javascript:void(0);" class="cart-thumbnail"><img src="images/pro-04.jpg" alt="A Line Layered Evening Dress Floor Length Sweetheart Neck Taffeta Empire Prom Dress" class="img-responsive" /></a>
                                                    <h5><a href="" class="cart-title">A Line Layered Evening Dress Floor Length Sweetheart Neck Taffeta Empire Prom Dress</a></h5>
                                                    <p class="grey-color">Order No. 9479976560 - 91</p>
                                                </td>
                                                <td class="hidden-xs">
                                                    <p><span>Brand:</span> Levise</p>
                                                    <p><span>Color:</span>Black</p>
                                                    <p><span>Size:</span>S</p>
                                                </td>
                                                <td class="hidden-xs"><span class="unit-price">$350.00</span></td>
                                                <td class="hidden-xs">
                                                    <input type="number" value="3" />
                                                </td>
                                                <td class="hidden-xs">
                                                    <button type="button" class="close hidden-xs">×</button><span>$350.00</span>
                                                </td>
                                            </tr>
                                            <tr class="calculation-block">
                                                <td colspan="3" class="hidden-xs"></td>
                                                <td class="title-total text-right">
                                                    <p>Sub-Total:</p>
                                                    <p>VAT (17.5%):</p>
                                                    <p>Total:</p>
                                                </td>
                                                <td>
                                                    <p>$350.00</p>
                                                    <p>$350.00</p>
                                                    <p class="total">$350.00</p>
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="col-md-12">
                                            <div class="row"><a href="javascript:void(0);" title="Continue shopping" class="btn-grey pull-left">Continue shopping</a><a href="javascript:void(0);" title="Checkout" class="btn-cta pull-right">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end cart-->
            <!-- begin address-->
            <div id="address" class="tab-pane">
                                        <div class="row">
                                            <form method="post" action="#" class="form-horizontal grey-bg">
                                                <fieldset class="billing_address col-md-6 col-sm-6">
                                                    <h4>BILLING ADRESS</h4>
                                                    <div class="element row">
                                                        <label for="firstname" class="col-md-3 col-sm-4 col-xs-12 required">First Name</label>
                                                        <input type="text" id="firstname" class="col-md-8 col-sm-6 col-xs-12" />
                                                    </div>
                                                    <div class="element row">
                                                        <label for="lastname" class="col-md-3 col-sm-4 col-xs-12 required">Last Name</label>
                                                        <input type="text" id="lastname" class="col-md-8 col-sm-6 col-xs-12" />
                                                    </div>
                                                    <div class="element row">
                                                        <label for="street" class="col-md-3 col-sm-4 col-xs-12 required">Street name</label>
                                                        <input type="text" id="street" class="col-md-8 col-sm-6 col-xs-12" />
                                                    </div>
                                                    <div class="element row">
                                                        <label for="city" class="col-md-3 col-sm-4 col-xs-12 required">City</label>
                                                        <input type="text" id="city" class="col-md-8 col-sm-6 col-xs-12" />
                                                    </div>
                                                    <div class="element row">
                                                        <label for="country" class="col-md-3 col-sm-4 col-xs-12 required">Country</label>
                                                        <input type="text" id="country" class="col-md-8 col-sm-6 col-xs-12" />
                                                    </div>
                                                    <div class="element row">
                                                        <label for="phone" class="col-md-3 col-sm-4 col-xs-12 required">Phone</label>
                                                        <input type="number" id="phone" class="col-md-8 col-sm-6 col-xs-12" />
                                                    </div>
                                                    <div class="element row">
                                                        <label for="comment" class="col-md-3 col-sm-4 col-xs-12">Order Comment</label>
                                                        <textarea id="comment" rows="5" name="message" class="col-md-8 col-sm-6 col-xs-12"></textarea>
                                                    </div>
                                                </fieldset>
                                            </form>
                                            <form method="post" action="#" class="form-horizontal">
                                                <fieldset class="shipping_address col-md-6 col-md-6 col-sm-6">
                                                    <div class="row title">
                                                        <div class="col-md-6 col-sm-8 col-xs-6">
                                                            <h4>SHIPPING ADRESS</h4>
                                                        </div>
                                                        <div style="padding-right:0;" class="col-md-5 col-xs-6 text-right">
                                                            <label class="custom_checkbox delivery">
                                                                <input type="checkbox" name="delivery" checked="checked"><b class="cb"></b>
                        </label><span>Same as billing</span>
                      </div>
                                                        </div>
                                                        <div class="hidden-xs">
                                                            <div class="element row">
                                                                <label for="firstname" class="col-md-3 col-sm-4 col-xs-12 required">First Name</label>
                                                                <input type="text" id="firstname" class="col-md-8 col-sm-6 col-xs-12" />
                                                            </div>
                                                            <div class="element row">
                                                                <label for="lastname" class="col-md-3 col-sm-4 col-xs-12 required">Last Name</label>
                                                                <input type="text" id="lastname" class="col-md-8 col-sm-6 col-xs-12" />
                                                            </div>
                                                            <div class="element row">
                                                                <label for="street" class="col-md-3 col-sm-4 col-xs-12 required">Street name</label>
                                                                <input type="text" id="street" class="col-md-8 col-sm-6 col-xs-12" />
                                                            </div>
                                                            <div class="element row">
                                                                <label for="city" class="col-md-3 col-sm-4 col-xs-12 required">City</label>
                                                                <input type="text" id="city" class="col-md-8 col-sm-6 col-xs-12" />
                                                            </div>
                                                            <div class="element row">
                                                                <select class="disabled col-md-8 col-sm-6 col-xs-12">
                                                                    <option disabled="">Chose option</option>
                                                                    <option disabled="">Chose option</option>
                                                                </select>
                                                                <label class="col-md-3 col-sm-4 col-xs-12">Country</label>
                                                            </div>
                                                            <div class="element row">
                                                                <label for="phone" class="col-md-3 col-sm-4 col-xs-12 required">Phone</label>
                                                                <input type="number" id="phone" class="col-md-8 col-sm-6 col-xs-12" />
                                                            </div>
                                                        </div>
                  </fieldset>
                </form>
                                                <div class="col-md-12 col-sm-12 col-xs-12 actions">
                                                    <div class="row"><a href="javascript:void(0);" title="Back to cart" class="btn-grey pull-left">Back to cart</a><a href="javascript:void(0);" title="Proceed to shipping" class="btn-cta pull-right">Proceed to shipping</a>
                                                    </div>
                                                </div>
              </div>
                                        </div>
                                        <!-- end address-->
            <!-- begin shipping-->
            <div id="shipping" class="tab-pane">
                                            <div class="row">
                                                <form method="post" action="#">
                                                    <fieldset class="col-md-6">
                                                        <h4>CHOOSE A TRANSPORT METHOD</h4>
                                                        <div class="radio has-pretty-child">
                                                            <div class="clearfix prettyradio">
                                                                <input type="radio" name="store" id="store" class="prettyCheckable" checked="checked" /><a href="" class="checked"></a>
                                                                <label for="store">Pick up in store</label>
                                                            </div>
                                                        </div>
                                                        <div class="radio has-pretty-child">
                                                            <div class="clearfix prettyradio">
                                                                <input type="radio" name="courier" id="courier" class="prettyCheckable" /><a href="" class="checked"></a>
                                                                <label for="courier">Transport courier</label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset class="col-md-6">
                                                        <h4>SELECT A PAYMENT METHOD</h4>
                                                        <div class="radio has-pretty-child">
                                                            <div class="clearfix prettyradio">
                                                                <input type="radio" name="bank" id="bank" class="prettyCheckable" checked="checked" /><a href="" class="checked"></a>
                                                                <label for="bank">Bank transfer</label>
                                                            </div>
                                                        </div>
                                                        <div class="radio has-pretty-child">
                                                            <div class="clearfix prettyradio">
                                                                <input type="radio" name="paypal" id="paypal" class="prettyCheckable" /><a href="" class="checked"></a>
                                                                <label for="paypal">Paypal</label>
                                                            </div>
                                                        </div>
                                                        <div class="radio has-pretty-child">
                                                            <div class="clearfix prettyradio">
                                                                <input type="radio" name="checkque" id="checkque" class="prettyCheckable" /><a href="" class="checked"></a>
                                                                <label for="checkque">Checkque payment</label>
                                                            </div>
                                                        </div>
                                                        <div class="radio has-pretty-child">
                                                            <div class="clearfix prettyradio">
                                                                <input type="radio" name="card" id="card" class="prettyCheckable" /><a href="" class="checked"></a>
                                                                <label for="card">Secure payment by credit card</label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <div class="col-md-12 actions"><a href="javascript:void(0);" title="Back to delivery" class="btn-grey pull-left">Back to delivery</a><a href="javascript:void(0);" title="Proceed to summary" class="btn-cta pull-right">Proceed to summary</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- end shipping-->
            <!-- begin summary-->
            <div id="summary" class="tab-pane clearfix">
                                            <div class="sumary-blocks flex row">
                                                <div class="col-md-4 col-sm-4 col-sm-12">
                                                    <div class="content-block">
                                                        <h4>BILLING INFORMATION</h4>
                                                        <ul class="list-unstyled">
                                                            <li>Mr. John Doe</li>
                                                            <li>Bakerstreet no.24</li>
                                                            <li>841 11 Bratislava</li>
                                                            <li>Slovak Republic</li>
                                                            <li>john@doe.com</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-4 col-sm-12">
                                                    <div class="content-block">
                                                        <h4>SHIPPING ADRESS</h4>
                                                        <ul class="list-unstyled">
                                                            <li>Mr. John Doe</li>
                                                            <li>Bakerstreet no.24</li>
                                                            <li>841 11 Bratislava</li>
                                                            <li>Slovak Republic</li>
                                                            <li>john@doe.com</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-4 col-sm-12">
                                                    <div class="content-block">
                                                        <h4>PAYMENT AND DELIVERY</h4>
                                                        <ul class="list-unstyled">
                                                            <li>Payment: Cash on delivery</li>
                                                            <li>Delivery: Eshop right post</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 actions"><a href="javascript:void(0);" title="Back to shipping" class="btn-grey pull-left">Back to shipping</a><a href="javascript:void(0);" title="Send order" class="btn-cta pull-right">Send order</a>
                                            </div>
                                            <!-- end summay-->
            </div>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div class="widgets clearfix">
                                    <div class="widget col-xs-12 col-sm-3 col-md-3 hidden-xs">
                                        <h5 class="widget-title">Customer Service</h5>
                                        <div class="widget-content">
                                            <ul class="unstyled-list">
                                                <li><a href="javascript:void(0);" title="Specials">Specials</a></li>
                                                <li><a href="javascript:void(0);" title="New products">New products</a></li>
                                                <li><a href="javascript:void(0);" title="Best sellers">Best sellers</a></li>
                                                <li><a href="javascript:void(0);" title="Our stores">Our stores</a></li>
                                                <li><a href="contact.html" title="Contact us">Contact us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="widget col-xs-12 col-sm-3 col-md-3 hidden-xs">
                                        <h5 class="widget-title">Customer Service</h5>
                                        <div class="widget-content">
                                            <ul class="unstyled-list">
                                                <li><a href="javascript:void(0);" title="My Account">My Account</a></li>
                                                <li><a href="javascript:void(0);" title="Shipping">Shipping</a></li>
                                                <li><a href="javascript:void(0);" title="Payment &amp; Return">Payment &amp; Return</a></li>
                                                <li><a href="javascript:void(0);" title="Privacy policy">Privacy policy</a></li>
                                                <li><a href="javascript:void(0);" title="Terms &amp; Conditions">Terms &amp; Conditions</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="widget col-xs-12 col-sm-3 col-md-3 hidden-xs">
                                        <h5 class="widget-title">Customer Service</h5>
                                        <div class="widget-content">
                                            <ul class="unstyled-list">
                                                <li><a href="javascript:void(0);" title="Order History">Order History</a></li>
                                                <li><a href="javascript:void(0);" title="Wish List">Wish List</a></li>
                                                <li><a href="javascript:void(0);" title="Newsletter">Newsletter</a></li>
                                                <li><a href="javascript:void(0);" title="Log in">Log in</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="widget col-xs-12 col-sm-3 col-md-3">
                                        <h5 class="widget-title">Contact Us</h5>
                                        <div class="widget-content">
                                            <ul class="list-unstyled">
                                                <li><i class="round-icon fa fa-map-marker list-icon"></i><span>1259, CALIFORNIA ST <br /> NEW YORK.</span></li>
                                                <li><i class="round-icon fa fa-phone list-icon"></i><span>843.724.0123 <br /> 843.724.0234</span></li>
                                                <li><i class="round-icon fa fa-envelope list-icon"></i><span>info@company.com <br /> ndt_kim@yahoo.com.vn</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-sub clearfix col-md-12 col-xs-12">
                                    <div class="footer-links center-xs">&copy; 2014 Fashion Demo Store designed by <a href="https://thienkim-frontend.github.io/cv/" title="Kim Nguyen">Kim Nguyen</a>. All Rights Reserved.
          </div>
                                </div>
                            </footer>
                        </div>
                        <div id="back-top"><a href="" title="Back to top"><i class="fa fa-chevron-up"></i></a></div>
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
                        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTt3yRgnZFOFWHKPqBR2PhnhQDBC1vhTs">   </script>
                        <script src="js/plugin.min.js"></script>
                        <script src="js/main.js"></script>
  </body>
</html>