import React from "react";
import "./side-drawer.css";

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }
    return (
      <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Logout</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/medical-videos">Videos</a></li>
            <li><a href="/hospitals">Emergency</a></li>
        </ul> 
      </nav>
    )
}

export default SideDrawer;

