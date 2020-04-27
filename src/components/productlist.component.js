import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './navbar.component'
import { connect } from "react-redux";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

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
    notif(e){
        console.log("dhfbsdjgn");
        NotificationManager.success('', 'Added to cart', 3000);
      
    }
    render(){
        return(
          
            <div>
                <Navbar/>
                <NotificationContainer/>
                <Container>
                    <Row>
                        {
                            this.props.st.map((curr)=>
                            {
                        var objson=localStorage.getItem("myobj");
                        const object1=JSON.parse(objson);

                                if(curr.sr>0 && object1[curr.sr-1].cart===0)
                                {
                                 return(
                    <Col>

                                    <Card
                                      bg={"secondary"}
                                      style={{ width: '18rem' }}>
                                 <Card.Header as="h5">{curr.name}</Card.Header>
                                    <Card.Body>
                                      <Card.Title>Rs {curr.price}</Card.Title>
                                      <Row>
                                            <Col xs={3} md={3}>
                                            <Image src={curr.image} thumbnail />
                                            </Col>
                                            </Row>
                                      <Card.Text>
                                      </Card.Text>
                                      <button class="rounded-pill btn btn-dark" onClick={e => {
                                                                        this.notif()
                                                                         this.props.cart1(curr.sr)
                                                                        }}>
                                    Add To Cart
                                      </button>
                                      <p>    </p>

                                      <button class="rounded-pill btn btn-dark" onClick={e => {
                                                                        this.call(curr.sr)
                                                                        }}>
                                    See More
                                      </button>
                                    </Card.Body>
                                  </Card>
                                    </Col>
                                    )
                                 }
                        }
                )
                }
                </Row>
                </Container>
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