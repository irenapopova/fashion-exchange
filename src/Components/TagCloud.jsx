import React from 'react'
import SidebarItem from './SidebarItem';


const TagCloud = () => {
    return (

        <SidebarItem title="Tag Cloud">
            <nav className="navTagCloud"></nav>
            <ul id="navTagCloud">
                <li>New Collection</li>
                <li>Dresses</li>
                <li>Jackets</li>
                <li>Trousers</li>
                <li>Jeans</li>


            </ul>
        </SidebarItem>

    );
}

export default TagCloud;