import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Form from './components/Login/form';
import HomePage from './components/Home/home';
import Medicalvideos from './components/Videos/medical-videos';
import Hospitals from './components/Emergency/hospitals';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/home" component={HomePage} />  
          <Route exact path="/medical-videos" component={Medicalvideos} />
          <Route exact path="/hospitals" component={Hospitals} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
 
export default App;


