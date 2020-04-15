import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
export default class Welcome extends Component {

    constructor(props) {
        super(props);
    }
    render()
    {
        var letterStyle = {
             color: "black",
               fontFamily: "monospace",
             fontSize: 50,
             textAlign: "center",
             position: "absolute",
             top:"47%",
              left:"45%",
            //  display:"flex",
            //  justifycontent:"center",
            //  alignitems:"center"
         };
       
        return(
            <div style={letterStyle}>
            <h1 >
                Thank You!
            </h1>
            </div>
        )
    }
}