import { createSlice, configureStore } from "@reduxjs/toolkit";

// Initial state for tasks
const initialState = {
    task: []
};

// Create slice using createSlice
export const taskReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload); // Add new task
        },
        deleteTask: (state, action) => {
            state.task = state.task.filter((_, index) => index !== action.payload); // Correct logic to delete task by index
        }
    }
});

// Destructure actions from slice
const { addTask, deleteTask } = taskReducer.actions;  // Correctly destructured actions

// CREATE the Redux store using configureStore
export const store = configureStore({
    reducer: {
        task: taskReducer.reducer,  // Correctly referencing the reducer in the store
    }
});

// Dispatch an action to add a task (should work fine)
store.dispatch(addTask('buy grapes'));
console.log(store.getState());  // Log the state after adding task

// Dispatch an action to delete a task
store.dispatch(deleteTask(0)); // Delete the first task
console.log(store.getState());  // Log the state after deleting task
