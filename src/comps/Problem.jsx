import React, { useState } from "react";
export const Problem = ({x, y}) => {

    const [selected, setSelected] = useState(false);
    

    const handleOnClick = (e) => {
        console.log(e);
        setSelected(() => !selected);
    };

    return (
        <g onClick={(e) => handleOnClick(e)}>
            <circle fill={selected ? "#FF00FF" : "#0FF0FF"} cx={x} cy={y} r={50}>
            </circle>
                <text x={x} y={y} text-anchor="middle" stroke="#000000" dy=".3em"> 
                Factor
                </text>          
        </g>
    )
}