import React from 'react'
var ReactDOM = require('react-dom');
//var TagCloud = require('tagCloud').TagCloud;

const TagCloud = () => {
    return (

        <div className="TagCloud">

            <nav className="navTagCloud"></nav>
            <ul id="navTagCloud">
                <li>New Collection</li>
                <li>Dresses</li>
                <li>Jackets</li>
                <li>Trousers</li>
                <li>Jeans</li>


            </ul>
        </div>

    );
}

export default TagCloud;