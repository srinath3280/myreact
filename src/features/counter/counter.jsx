import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, res } from "./counterSlice";
import { dec } from "./counterSlice";

function Counter(){
    var {count} = useSelector(state=>state.c);
    var dispatch = useDispatch();
    return (
        <div className="mybox">
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(inc())}}>Increment</button>
            <button onClick={()=>{dispatch(dec())}}>Decrement</button>
            <button onClick={()=>{dispatch(res())}}>Reset</button>
        </div>
    )
}
export default Counter