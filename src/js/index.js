//import react into the bundle
import React, { useState, useEffect }from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";

const listOfParams = [
    {marginTop: 13, backgroundImage: "radial-gradient(red, red, black)"},
    {marginTop: 142, backgroundImage: "radial-gradient(yellow, yellow, black)"},
    {marginTop: 271, backgroundImage: "radial-gradient(green, green, black)"}
]

const useStyle = {visibility: "hidden"}

let looper;
let count = 0
const TrafficLight = () => {
    const [isSelected, yPos] = useState(useStyle);

    const colorSelector = (newVal) => {
        yPos(listOfParams[newVal])
        if (newVal.isNull == true) {clearInterval(looper)}
    }

    const colorLooper = () => {
        yPos(listOfParams[count])
        count++
        clearInterval(looper)
        looper = setInterval(function(){
            if (count >= listOfParams.length) {count = 0}
            yPos(listOfParams[count])
            count++
        }, 500)
    }

    return (
        <div>
            <div className="trafficLight">
                <div className="lightBkgrnd">
                    <div className="glowCirc" style={isSelected}></div>
                    <button className="redLight" onClick={() => 
                        {colorSelector(0), count=0, clearInterval(looper)}}></button>
                    <button className="yellowLight" onClick={() => 
                        {colorSelector(1), count=1, clearInterval(looper)}}></button>
                    <button className="greenLight" onClick={() => 
                        {colorSelector(2), count=2, clearInterval(looper)}}></button>
                    <button className="loopLights" onClick={() => {colorSelector([count]), colorLooper()}}>Loop</button>
                    <button className="stopCycle" onClick={() => (colorSelector({visibility: "hidden", isNull: true}))}>Turn off</button>
                </div>
                <div className="bottuns">
                    
                </div>
            </div>
        </div>
    )
}

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
