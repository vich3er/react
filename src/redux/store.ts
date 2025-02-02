import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
    }
});