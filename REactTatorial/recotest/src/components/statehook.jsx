import React, { useState } from "react";

import "./style/style.css";
// this componnent made toexplain how the useState hook works 
const StateHook=()=>{

    let counter1=0;
    const[counter,setConuter]=useState(0);
    
    const increment=()=>{
        counter1+=1;
        setConuter(counter+1);
        console.log("conuter1 value",counter1)
    }

    const[inputval,setInput]=useState("");

    return(
        <div className="State">
            <header> <h1>State Hook</h1></header>
            <h1> {counter} from state  </h1>
            <button onClick={()=>{increment()}} >
                increment
            </button>
            <h2>{counter1} this is normal variable </h2>
        <div>
        <input type="text" onChange={(event)=>(setInput(event.target.value))}  />
        <br/>
        {inputval}

        </div>

        </div>
    );

}

export default StateHook;