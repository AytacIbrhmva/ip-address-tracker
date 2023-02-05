import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '',
}

const ipAddressSlice = createSlice({
    name: "ip",
    initialState,
    reducers: {
        setIpBySearch: (state, action) => {
            state.value = action.payload
        },
    },
});

export const {setIpBySearch} = ipAddressSlice.actions;
export default ipAddressSlice.reducer;