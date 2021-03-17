import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./side-drawer.css";

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }

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
      <nav className={drawerClasses}>
        <ul>
            <li><button onClick={logout}>Logout</button></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/medical-videos">Videos</a></li>
            <li><a href="/hospitals">Emergency</a></li>
        </ul> 
      </nav>
    )
}

export default SideDrawer;

