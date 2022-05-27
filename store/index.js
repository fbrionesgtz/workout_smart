import workoutSlice from "./workout-slice";
import authSlice from "./auth-slice";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        workout: workoutSlice,
        auth: authSlice
    }
});

export default store;
