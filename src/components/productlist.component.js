import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './navbar.component'
import Notification from './notification.component'
import { connect } from "react-redux";


class Productlist extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.call = this.call.bind(this)
    }
    call(e) {
        var o=JSON.stringify(e)
        localStorage.setItem("Page",o);
        window.location="/seemore"
    }
    render(){
        return(
          
            <div>
                <Navbar/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Add to Cart</th>
                            <th>See More</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.st.map((curr)=>
                            {
                        var objson=localStorage.getItem("myobj");
                        const object1=JSON.parse(objson);

                                if(curr.sr>0 && object1[curr.sr-1].cart===0)
                                {
                                 return(
                                     <tr>
                                         <td>{curr.sr}</td>
                                         <td>{curr.name}</td>
                                         <td>{curr.price}</td>
                                         <td>
                                             <button class="rounded-pill btn btn-dark" onClick={e => this.props.cart1(curr.sr)}>
                                                 Add to Cart</button> 
                                        </td>
                                        <td>
                                                 <button class="rounded-pill btn btn-dark" onClick={e => this.call(curr.sr)}>
                                                     See More</button> 
                                         </td>
                                     </tr>
                                    )
                                 }
                        }
                )
                }
            </tbody>
            </table>
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
    cart1:(sr)=>{dispatch({type:"CART",payload:sr})},

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Productlist);