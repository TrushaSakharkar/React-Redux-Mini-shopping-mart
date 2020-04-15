import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './navbar.component'
import { connect } from "react-redux";


class Mycart extends Component {

    constructor(props) {
        super(props);
        this.state ={
            edit:0
        }
        this.onChangeEdit = this.onChangeEdit.bind(this)
        this.buy = this.buy.bind(this)


    }
    buy() {
        window.location='/bye'
    }
    onChangeEdit(event) {
        this.setState({ edit: event.target.value });
    }
    render(){
        var t=localStorage.getItem("total");
        const t1=JSON.parse(t);
        return(
                  
                    <div>
                        <Navbar/>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Product name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Edit Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
        
                                {
                                    this.props.st.map((curr)=>
                                    {
                                var objson=localStorage.getItem("myobj");
                                const object1=JSON.parse(objson);
                                            if(curr.sr>0 && object1[curr.sr-1].cart===1)
                                        {
                                         return(
                                             <tr>
                                                 <td>{curr.sr}</td>
                                                 <td>{curr.name}</td>
                                                 <td>{curr.price}</td>
                                                  <td>{object1[curr.sr-1].quantity}</td> 
                                                 <td>
                                                 <input type="number" 
                                                        id="edit" 
                                                        name="edit" 
                                                        placeholder="edit" 
                                                        class="input-xs"
                                                        onChange={this.onChangeEdit}
                                                />
                                                     <button class="rounded-pill btn btn-dark" onClick={(e,f) => this.props.edit(curr.sr,this.state.edit)}>
                                                         Edit</button> 
                                                </td>
                                                <td>
                                                         <button class="rounded-pill btn btn-dark" onClick={e => this.props.remove(curr.sr)}>
                                                             Remove</button> 
                                                 </td>
                                             </tr>
                                            )
                                         }
                                }
                        )
                        }
                    </tbody>
                    </table>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <center>
                        <div>
                    <p><b><u>TOTAL</u></b>  {t1}</p>
                    <br/>
                    <button class="rounded-pill btn btn-dark" onClick={e => this.buy()}>
                                                             BUY NOW</button> 
                        </div>
                        <h1></h1>
                    </center>
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
        remove:(sr)=>{dispatch({type:"REMOVE",payload:sr})}
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Mycart);
