import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        id : "",
        firstName : "",
        lastName : "",
        email: ""
    },
    reducers : {
        setName : (state, {payload}) => {
            state.firstName = payload
        }
    }
})


export default userSlice.reducer