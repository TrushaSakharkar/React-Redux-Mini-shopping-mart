import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './navbar.component'
import { connect } from "react-redux";



class Seemore extends Component {

    constructor(props) {
        super(props);
        this.state ={
            edit:0
        }
        this.onChangeEdit = this.onChangeEdit.bind(this)
    }
    onChangeEdit(event) {
        this.setState({ edit: event.target.value });
    }
    render(){
        var letterStyle = {
               // backgroundColor: "#ffde00",
                color: "#333",
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: 16,
                textAlign: "center",
                position: "relative",
                left: "5px"
            };
            return(

            <div>
                <Navbar/>
                <div>
                </div>
            {this.props.st.map((curr)=>{
                 var objson=localStorage.getItem("Page");
                 const object1=JSON.parse(objson);
                    if(curr.sr===object1)
                    {
                      return(
                        <div>
                            <center>

                           <img src={curr.image}></img>
                            <h1 >{curr.name}</h1>
                            <br/>
                            <div style={letterStyle}>
                            <p><b><u>DESCRIPTION</u></b>  {curr.description}</p>
                            </div>
                            <br/>
                            <div style={letterStyle}>
                            <p><u><b>FEATURES</b></u>  Very cool!</p>
                            <p><b><u>PRICE</u></b>  {curr.price}</p>
                            </div>
                            <br/>
                            <div>
                            <input type="number" 
                                                        id="edit" 
                                                        name="edit" 
                                                        placeholder="edit" 
                                                        class="input-xs"
                                                        onChange={this.onChangeEdit}
                                                />
                                                <br/>
                                                     <button class="rounded-pill btn btn-dark" onClick={(e,f) => this.props.edit(curr.sr,this.state.edit)}>
                                                         Select Quantity</button> 
                            </div>
                            <br/>
                            <div>
                            <button class="rounded-pill btn btn-dark" onClick={e => this.props.cart1(curr.sr)}>
                                                 Add to Cart</button> 
                                                 </div>
                            </center>
                        
                           </div>
                         )
                    }
            }
            )}
          
            
        </div>
        )
    }    

}

const mapStateToProps = (state) =>{
    return{
        st:state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        edit:(sr,q)=>{dispatch({type:"EDIT",payload:sr,quantity:q})},
    cart1:(sr)=>{dispatch({type:"CART",payload:sr})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Seemore);
