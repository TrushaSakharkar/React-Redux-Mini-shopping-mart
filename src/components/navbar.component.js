import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Navbar extends Component {

    render(){
        return(
          <Router>
          
         <nav id="main_nav" className="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <ul className="navbar-nav mr-auto navbar-left">
                            <li className="nav-item active">
                                <a href="/productlist" className="nav-link">Product List<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a href="/mycart" className="nav-link">My Cart<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <button className="navbar-toggler" type="button" onClick={this.toggle} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto navbar-left">
                            </ul>
                            <ul className="navbar-nav navbar-right">
                                <li className="nav-item">
                                    <a  className="nav-link" > <strong></strong> </a>
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link" > <strong></strong> </a>
                                </li>
                                <li className="nav-item dropdown">
                                  
                                    
                                </li>
                            </ul>
                        </div>

                    
</nav>
        </Router>
        )
}
}