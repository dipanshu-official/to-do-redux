import { createStore } from "redux"

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"

const initialState = {
    task: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }

        case DELETE_TASK:
            const updatedTask = state.task.filter((_, index) => index !== action.payload)
            return {
                ...state,
                task: updatedTask
            }

        default:
            return state;
    }
}

export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}

export const deleteTask = (index) => {
    return { type: DELETE_TASK, payload: index }
}

// create the store
export const store = createStore(taskReducer)

console.log("Initial State:", store.getState())

// Dispatch actions

console.log("After Adding Tasks:", store.getState())

store.dispatch(deleteTask())
console.log("After Deleting Task at index 1:", store.getState())
