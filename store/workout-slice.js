import {createSlice} from "@reduxjs/toolkit";

const workoutSlice = createSlice({
    name: "workout",
    initialState: {
        categories: "",
        sets: [{
            setNum: 1,
            exercises: [{
                name: "",
                reps: 0,
                time: 0
            }]
        }]
    },
    reducers: {
        addSets: (state, action) => {
            state.sets.push(action.payload);
        },
        addCategory: (category) => {
            console.log(category);
        },
        addTime: (state, action) => {
            const i = state.sets.findIndex(set => {
                return set.setNum === action.payload.setNum;
            });

            state.sets[i].exercises[0].time = action.payload.time;
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
