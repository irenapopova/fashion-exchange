import React from 'react';
import SidebarItem from './SidebarItem';



const Categories = () => {
    return (
        <SidebarItem title="Categories">
        
            <nav className="navCategories"></nav>
            <ul id="navCategories">
                <li>New Arrivals</li>
                <li>Tops</li>
                <li>Shirts & Blouses</li>
                <li>Trousers</li>
                <li>Jeans</li>
                <li>Dresses</li>
                <li>Skirts</li>
                <li>Jackets & Coats</li>
                <li>Nightwear</li>
                <li>Shoulder Bag</li>

            </ul>
        </SidebarItem>
    );
}
export default Categories;