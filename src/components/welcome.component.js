import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export default class Welcome extends Component {

    constructor(props) {
        super(props);
    this.onSubmit1 = this.onSubmit1.bind(this);
    var obj=[
        {
            sr:1,
            cart:0,
            quantity:0
        },
        {
            sr:2,
            cart:0,
            quantity:0
        },
        {
            sr:3,
            cart:0,
            quantity:0
        },
    ] 
    var  objson=JSON.stringify(obj);
    localStorage.setItem("myobj",objson);
    var d=0;
    var de=JSON.stringify(d);
    localStorage.setItem("total",de);


    }
    onSubmit1(e) {
        e.preventDefault();
       window.location='/productlist'
    }
    render(){
        return(
            <center>
            <div style={{position:"absolute",top:"45%",left:"45%"}}>
            <h1>WELCOME!</h1>
            <button className="rounded-pill btn btn-dark" style={{textAlign:"center"}} onClick={this.onSubmit1}>
                 ENTER
                </button>
        
            </div>
            </center>
        )
    }    

}