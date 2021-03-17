import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import DrawerToggleButton from "./drawer-toggle-button";
import './toolbar.css';

export default function Toolbar(props) {
  const {userData, setUserData} = useContext(UserContext);
  const history = useHistory();

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.removeItem("auth-token");
        history.push("/");  
    }
  
  return (
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
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}