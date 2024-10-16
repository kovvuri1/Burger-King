import React,{Component} from "react";
export default class Head extends Component{
    render(){
        return(
            <>
            <div class="header">
                <p id="menu"><i class="fa-solid fa-bars"></i></p>
                <h1 id="burger">BURGER KING</h1>
                <p id="person"><i class="fa-solid fa-user"></i></p>
                <button class="order" id="bts"><i class="fa-solid fa-bag-shopping"></i>  View cart</button>
            </div>
            
            </>
        )
    }
}