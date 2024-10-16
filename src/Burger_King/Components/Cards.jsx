import React,{Component} from "react";
export default class Card extends Component{
        constructor(props){
            super(props)
        }
    render(){
        return(
            <>
             <div className='data'>
                    <img src={this.props.imsrc} alt="cardimg"></img>
                    <div className="detl">
                         <h2>{this.props.heading}</h2>
                         <p className="para">{this.props.para}</p>
                         <p className="para" style={{textDecoration:"underline"}}>{this.props.para1}</p>
                         <button className="btn btn1" style={{width:"102px ", height:"39px" ,padding:"5px",position:"absolute",right:"10px",bottom:"10px",fontSize:"15px"}}>{this.props.but}</button>
                    </div>
                </div>
            </>

        )
    }
}