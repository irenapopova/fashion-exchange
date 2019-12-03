import React from 'react'



const Header = () => {
    return (
        <div className="header">

            <nav className="innerNav">
                <div id="topNav">
                    <div class="logo-wrapper" />
                    <div>
                        <div id="languageOptions">
                            <a>EN</a>
                            <a>DE</a>
                            <a>€</a>
                            <a>£</a>
                        </div>
                        <ul id="navList">
                            <li>MY ACCOUNT</li>
                            <li>MY WISHLIST</li>
                            <li>MY COMPARE</li>
                            <li>CHECKOUT</li>
                            <li>LOG OUT</li>
                        </ul>
                    </div>

                </div>
                <div id="mainNavBar">
        <ul id="mainNavList">
        <li>HOME</li>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>TEMPLATES</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>


        </ul>
                </div>

            </nav>
        </div>

    )
}

export default Header
