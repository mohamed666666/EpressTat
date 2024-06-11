import React, { useRef, useState } from "react";

import "./style/style.css";
// useRef hoook is used to manuiplat the html elements throw its referance  
const RefHook=()=>{

    const[inputval,setInput]=useState("");

    const inputref=useRef(null);
    const click=()=>{
        setInput(inputref.current.value);
        inputref.current.focus();
        inputref.current.value=" ";
}

    return(
        <div className="reduce">
            <header> <h1>ReF Hook</h1></header>
           
        <div>
        <input type="text" ref={inputref}  />
        <br/>
        {inputval}
        <button onClick={click}>
            change value
        </button>
        </div>

        </div>
    );

}

export default RefHook;