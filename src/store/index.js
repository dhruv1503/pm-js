import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/slice"
import projectsSlice from "../features/projects/slice"

export const store = configureStore({
    reducer : {
      user : userSlice,
      projects : projectsSlice
    }
})