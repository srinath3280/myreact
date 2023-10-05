import { connect } from "react-redux";
import React, { useState } from "react";
import { addTodo } from "../store/actions";

function Todolist(props){
    var [Todos,setTodos] = useState('');
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setTodos(e.target.value)}}/>
            <button className="btn1" onClick={()=>{props.dispatch(addTodo(Todos))}}>Add</button>
            <button className="btn2" onClick={()=>{}}>Update</button>
            <ul>
                {
                    props.t.todolist.map((todo,i)=>{
                        return (
                            <li>{todo}
                                <button onClick={()=>{props.dispatch({type:"DEL",payload:i})}}>Del</button>
                                <button onClick={()=>{props.dispatch({type:'EDIT',payload:i})}}>Edit</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store=>store)(Todolist)