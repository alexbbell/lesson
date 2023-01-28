import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },

    reducers: {

        addTodo(state, action) {
            console.log(state);
            console.log(action);

            state.todos.push( {
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
             } );
    
         },


        removeTodo(state, action) { 
            state.todos = state.todos.filter( todo => todo.id !== action.payload.id);
        },
        toggleTodoCompleted(state, action) { 
            const toggled = state.todos.find(item => item.id === action.payload.id);
            toggled.completed = !toggled.completed;
        },
    },
});

export const {addTodo, removeTodo, toggleTodoCompleted} = todoSlice.actions;
export default todoSlice.reducer;

