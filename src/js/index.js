//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

let Counter = (props) =>{
    return(
        <div className="general-container d-flex align-items-center justify-content-center vh-100">
        <div className="icon"><i class="fas fa-clock"></i></div>
        <div className="one">{props.digitOne %10}</div>
        <div className="two">{props.digitTwo %10}</div>
        <div className="three">{props.digitThree %10}</div>
        <div className="four">{props.digitFour %10}</div>
        <div className="five">{props.digitFive %10}</div>
        <div className="six">{props.digitSix %10}</div>
    </div>
    )
   
};


let count =0
    setInterval(function(){
            const six = Math.floor(count/1);
            const five = Math.floor(count/10);
            const four = Math.floor(count/100);
            const three = Math.floor(count/10000);
            const two = Math.floor(count/100000);
            const one = Math.floor(count/1000000);
            count ++;
    
//render your react application
ReactDOM.render(<Counter digitOne={one} digitTwo={two} digitFour={four} digitFive={five} digitThree={three} digitSix={six}/>, document.querySelector("#app"));
},1000)
