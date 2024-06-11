import React, { useEffect, useState } from "react";

import "./style/style.css";
// thw Use EFFECT hook calls when the page rerenderd OR ||||| the state changed 
const EffectHook=()=>{

    const[data,setdata]=useState("");

    useEffect(
        ()=>{
            console.log(data);
        },
        [data] //spicify the states you want to lesting its change 
    )


    return(
        <div className="State">
            <header> <h1>Effect  Hook</h1></header>
           
        <div>
        <input type="text" onChange={(event)=>{
           setdata(event.target.value); }}  />
        <br/>
        {data}

        </div>

        </div>
    );

}

export default EffectHook;