import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        previous: [],
        difference: 1
    },
    reducers: {
        setCount: (state, action) => ({...state, value: action.payload}),
        setDifference: (state, action) => ({...state, difference: action.payload}),
        addToPrevious: (state, action) => ({...state, previous: [...state.previous, action.payload]}),
        removeFromPrevious: (state) => ({...state, previous: state.previous.slice(0, -1)}),
        incrementValue: (state) => ({...state, value: state.value + state.difference}),
        decrementValue: (state) => {
            if (state.value - state.difference < 0)
                return {...state, value: 0}
            else return {...state, value: state.value - state.difference}
        },
        incrementDifference: (state) => ({...state, difference: state.difference + 1}),
        decrementDifference: (state) => {
            if (state.difference - 1 < 0)
                return {...state, difference: 0}
            else return {...state, difference: state.difference - 1}
        }
    }
})

export const {
    setCount,
    setDifference,
    addToPrevious,
    removeFromPrevious,
    incrementValue,
    decrementValue,
    incrementDifference,
    decrementDifference
} = counterSlice.actions;
export const selectCount = state => state.counter.value;
export const selectPrevious = state => state.counter.previous;
export const selectDifference = state => state.counter.difference;
export default counterSlice.reducer;