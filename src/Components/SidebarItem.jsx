import React from "react";



function SidebarItem(props) {
    return (<div className="sideBarItem">
        <div className="sidebarItemTitle">
            <h4>{props.title}</h4>
        </div>
        <section>{props.children}</section>
    </div>)
}

export default SidebarItem;