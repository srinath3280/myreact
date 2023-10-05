import { connect } from "react-redux";
import React from "react";
import { ResetCount, incCount, decCount } from "../store/actions";

function Counter(props){
    return (
        <div className="mybox">
            <h1>Counter:{props.c.count}</h1>
            <button onClick={()=>{props.dispatch(incCount())}}>Increment</button>
            <button onClick={()=>{props.dispatch(decCount())}}>Decrement</button>
            <button onClick={()=>{props.dispatch(ResetCount())}}>RESET</button>
        </div>
    )
}
export default connect(function(store){return store})(Counter)