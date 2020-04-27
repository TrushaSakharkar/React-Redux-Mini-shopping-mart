import { combineReducers } from 'redux'
import store from '../index.js'
import { act } from 'react-dom/test-utils'



export function reducer1 (state,action){
  
        switch(action.type)
        {
            case "ALL":
                return state
            case "CART":
                return reducer(state,action)
            case "EDIT":
                return reducer(state,action)
            case "REMOVE":
                return reducer(state,action)
            default:
                return state
        }
}




export function reducePost(post,action){
    if(post.sr !== action.payload)
       { return post;}
       var objson=localStorage.getItem("myobj");
       var object=JSON.parse(objson);

       var d=localStorage.getItem("total");
       var de=JSON.parse(d);
    switch(action.type){
        case "CART":
            post.cart=1
            console.log(object[post.sr-1])
            object[post.sr-1].cart=1
            console.log(object[post.sr-1])
            var object1=JSON.stringify(object);
            localStorage.setItem("myobj",object1);
            return post
        case "EDIT":
            var k=object[post.sr-1].quantity
            de=de-post.price*k
            if(action.quantity<0)
            {
                action.quantity=0
            }
            object[post.sr-1].quantity=action.quantity;
            de=de+post.price*action.quantity;
            if(de<0)
            {
                de=0;
            }
            var df=JSON.stringify(de);
            var object1=JSON.stringify(object);
            localStorage.setItem("myobj",object1);
            localStorage.setItem("total",df);
            return post;
        case "REMOVE":
            de=de-object[post.sr-1].quantity*post.price
            if(de<0)
            {
                de=0;
            }
            object[post.sr-1].cart=0;
            object[post.sr-1].quantity=0;
            var df=JSON.stringify(de);
            var object1=JSON.stringify(object);
            localStorage.setItem("total",df);
            localStorage.setItem("myobj",object1);
            return post;
        default:
            return post;

    }
} 

export function reducer (state,action){
    const k= state.map(post => reducePost(post,action))
    state.map(e => console.log(e.name,e.cart))
    return k
}

export default reducer1;