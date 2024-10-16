import React,{Component} from 'react';
// import "./Styles/App.css";
import Head from "./Head.jsx";
import Foot from "./Footer.jsx"

export default class head extends Component{
    render(){
        return(
            <>
            <Head/>
            <div>
               <div className='con1'>
                  <h1 className="head">Start your BK® order.</h1>
                  <button class="btn"><i class="fa-solid fa-bag-shopping"></i>  Order PickUp</button><br></br>
                  <button class="btn btn1"> <i class="fa-solid fa-bicycle"></i> Order Delivery</button>
               </div>
                   <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1125&q=90&fit=max&auto=format" alt="part"></img>
            </div>
            
            <Foot/>
            
            </>

        )
    }
}