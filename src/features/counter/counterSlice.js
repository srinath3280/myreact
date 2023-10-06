import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        inc:(state)=>{
            state.count++
        },
        dec:(state)=>{
            state.count--
        },
        res:(state)=>{
            state.count = initialState.count
        }
    }
})
export var {inc, dec, res} = counterSlice.actions;
export default counterSlice.reducer;