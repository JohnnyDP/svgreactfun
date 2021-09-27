import React, { useState } from "react";

export const Factor = ({x, y}) => {

    const [selected, setSelected] = useState(false);
    const [context, setContext] = useState("none");

    const handleOnClick = (e) => {
        console.log(e);
        setSelected(() => !selected);
    };
    

    return (
        <g onClick={(e) => handleOnClick(e)}>
            <circle fill={selected ? "#FF0000" : "#00FF00"} cx={x} cy={y} r={50}>
            </circle>
                <text x={x} y={y} text-anchor="middle" stroke="#000000" dy=".3em"> 
                Problem
                </text>           

        </g>
    )
}