import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Rooms from './Rooms'
import SingleRoom from './SingleRoom'
import Error from './Error'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {
  return (
    <div> 
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/SingleRoom" component={SingleRoom}/>
        <Route exact path="/Error" component={Error}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
