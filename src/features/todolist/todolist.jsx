import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todolistSlice";

function Todolist(){
    var {todolist} = useSelector(state=>state.t);
    var dispatch = useDispatch();
    var [newTodo,setNewTodo] = useState('');
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
            <button onClick={()=>{dispatch(addTodo(newTodo))}}>Add</button>
            <ul>
                {
                    todolist?.map((t,i)=>{
                        return (
                            <li>
                                {t}
                                <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist