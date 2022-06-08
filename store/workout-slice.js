import {createSlice} from "@reduxjs/toolkit";

const workoutSlice = createSlice({
    name: "workout",
    initialState: {
        category: "",
        sets: [{
            setNum: 1,
            exercises: [{
                name: "",
                reps: 0,
                time: 0,
                rest: 0
            }]
        }]
    },
    reducers: {
        initializeWorkout: (state, action) => {
          state.category = action.payload.category;
          state.sets = action.payload.sets;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        addSets: (state, action) => {
            state.sets.push(action.payload);
        },
        addTime: (state, action) => {
            switch (state.category){
                case "AMRAP":
                    const i = state.sets.findIndex(set => {
                        return set.setNum === action.payload.setNum;
                    });

                    state.sets[i].exercises[0].time = action.payload.time;
                    break;
                case "For Time":

                    break;
            }
        },
        addRest: (state, action) => {
            switch (state.category){
                case "AMRAP":
                    const i = state.sets.findIndex(set => {
                        return set.setNum === action.payload.setNum;
                    });

                    state.sets[i].exercises[0].rest = action.payload.rest;
                    break;
                case "For Time":

                    break;
            }
        },
        addReps: (reps) => {
        },
        addExercise: (id) => {
        },
        removeExercise: (id) => {
        },
        removeTime: (id) => {
        }
    }
});

export const workoutActions = workoutSlice.actions;
export default workoutSlice.reducer;
