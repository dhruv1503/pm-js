import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name : "tasks",
    initialState : {tasks : []},
    reducers : {
        setTasks : (state, {payload}) => {
            state.tasks = payload
        }
    }
})