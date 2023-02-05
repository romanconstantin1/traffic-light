//import react into the bundle
import React, { useState, useEffect }from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";

const TrafficLight = () => {
    const useStyle = {visibility: "hidden"}
    
    const [isSelected, yPos] = useState(useStyle);

    const colorSelector = (newY) => {yPos(newY)}

    return (
        <div>
            <div className="trafficLight">
                <div className="lightBkgrnd">
                    <div className="glowCirc" style={isSelected}></div>
                    <button className="redLight" onClick={() => (colorSelector({visibility: "visible", marginTop: 13}))}></button>
                    <button className="yellowLight" onClick={()=> (colorSelector({visibility: "visible", marginTop: 142}))}></button>
                    <button className="greenLight" onClick={() => (colorSelector({visibility: "visible", marginTop: 271}))}></button>
                    <button className="stopCycle" onClick={() => (colorSelector({visibility: "hidden"}))}>Turn off</button>
                </div>
            </div>
        </div>
    )
}

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
