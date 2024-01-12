import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"hello world"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
    
    addTodo:()=>{
        const todo={
            id:nanoid()  ,//Date.now()
            text:'action.payload' //payload is alredy object , it has all property (id,email,numbers)
        }
        state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
    }}
})
export const {addTodo,removeTodo}=todoSlice.actions  
