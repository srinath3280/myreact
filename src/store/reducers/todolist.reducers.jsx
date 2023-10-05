var initialState = {
    todolist:["Srinath","Teja","Bhargav","Vasu"]
}
function todolistReducer(state=initialState,action,i){
    if(action.type === 'ADDTODO'){
        return {todolist:[...state.todolist,action.payload]}
    }
    if(action.type === 'DEL'){
      var y = state.todolist;
      y.splice(action.payload,1);
        return {todolist:[...y]}
    }
    if(action.type === 'EDIT'){
        console.log(action)
    }
    return state
}
export default todolistReducer