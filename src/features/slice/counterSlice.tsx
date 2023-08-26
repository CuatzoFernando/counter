import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
    value: number
}

const initialState: counterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        reset: (state) =>{
            state.value = initialState.value
        }
    }
})

/// export only actions
export const {
    increment, decrement, incrementByAmount, decrementByAmount, reset
} = counterSlice.actions

// export the slice itself for use in other slices and components
export default counterSlice.reducer