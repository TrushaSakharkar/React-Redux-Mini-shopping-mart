import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer1 from './reducers/reducers'
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

var istate=[
  {
      sr:0,
      id:1,
      total:0,
      cart:[]
  },
   {
      sr:1,
      name:"Ball",
      price:"30",
      quantity:9,
      description:"Play Play Play!",
      cart:0,
      image:"https://img2.exportersindia.com/product_images/bc-full/dir_85/2549826/top-quality-futsal-ball-887137.jpg"

  },
  {
       sr:2,
       name:"Drum",
       price:"40",
       quantity:10,
       description:"Beat Beat Beat!",
      cart:0,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Bongo.jpg/800px-Bongo.jpg"

   },
   {
       sr:3,
       name:"Cup",
       price:"50",
       quantity:9,
       description:"Sip Sip Sip!",
       cart:0,
       image:"https://media.gettyimages.com/photos/red-cup-picture-id171368204?s=612x612"
 
      }
]

const store=createStore(reducer1,istate)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store