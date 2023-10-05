import { ADDTODO,INC,DEC,RES } from "./actionsList"

export function addTodo(Todos){
    return {type:ADDTODO,payload:Todos}
}
export function incCount(){
    return {type:INC}
}
export function decCount(){
    return {type:DEC}
}
export function ResetCount(){
    return {type:RES}
}