import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Productlist from './components/productlist.component'
import Mycart from './components/mycart.component'
import Welcome from './components/welcome.component'
import Seemore from './components/seemore.component'
import Bye from './components/bye.component'
 import Notification from './components/notification.component'

function App() {
  return (
    <div>
   <Router>
     <Route path='/productlist' exact component={Productlist}/>
     <Route path='/mycart' exact component={Mycart}/>
     <Route path='/seemore' exact component={Seemore}/>
     <Route path='/bye' exact component={Bye}/>
     <Route path='/notification' exact component={Notification}/>
     {/* <Route path='/' component={Navbar}/> */}
     <Route path='/' exact component={Welcome}/>
   </Router>
   </div>
  );
}

export default App;
