import {createSlice} from "@reduxjs/toolkit";

const workoutSlice = createSlice({
    name: "workout",
    initialState: {
        currentSet: false,
        sets: 0,
        categories: [],
        exercises: [],
        reps: [],
        times: []
    },
    reducers: {
        setCurrentSet: (state, action) => {
            state.currentSet = action.payload;
        },
        addSets: (state, action) => {
            // if(state.currentSet && state.sets === 0) {
            //     state.sets = action.payload;
            //     // return;
            // } else if (!state.currentSet)
            state.sets = state.sets + action.payload;
        },
        addCategory: (category) => {
            console.log(category)
        },
        addTime: (state, action) => {
            // if (state.sets === 1) {
            //     state.times = action.payload;
            //     console.log(state.times);
            // } else if (state.sets > 1) {
                state.times = [...state.times, action.payload];
                console.log(state.times);
            // }
        },
        addReps: (reps) => {
        },
        removeTime: (id) => {
        },
        addExercise: (id) => {
        },
        removeExercise: (id) => {
        }
    }
});

export const workoutActions = workoutSlice.actions;
export default workoutSlice.reducer;
