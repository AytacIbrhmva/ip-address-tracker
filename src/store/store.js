import { configureStore } from "@reduxjs/toolkit";
import ipAddressReducer from "./features/ipAddressSlice";

export const store = configureStore({
    reducer: {
        ip: ipAddressReducer,
    },
});