import { useReducer } from "react";
import React from "react";
import "./style/style.css";

const reducer=(state,action)=>{
    switch (action.type){
        case "INCREMENT":
            return {count:state.count+1,showtext:state.showtext}
        case "SHOW":
            return{count:state.count,showtext:! state.showtext}
        default:
            return{count:state.count,showtext:state.showtext}
    };

};


const ReducerHook=()=>{

    const[state,dispatcher]=useReducer(reducer,{count:0,showtext:false} );

    return(
        <div className="reduce">
            <header> <h1>Reducer Hook</h1></header>
            <h1> {state.count} from state of reducer </h1>
            <button onClick={()=>
            {
                dispatcher({type:"INCREMENT"});
                dispatcher({type:"SHOW"});     
                }} >
                increment
            </button>
      
        
        <br/>
        {state.showtext&& <p>this is the text</p>}

        </div>
    );

}

export default ReducerHook;