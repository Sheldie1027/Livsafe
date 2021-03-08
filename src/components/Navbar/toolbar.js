import React from "react";
import DrawerToggleButton from "./drawer-toggle-button";
import './toolbar.css';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo"><a href="#">Livsafe</a></div>
      <div className="space"/>
      <div className="toolbar-navigation-items">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/medical-videos">Videos</a></li>
          <li><a href="/hospitals">Emergency</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar;