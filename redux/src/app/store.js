import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";  // ✅ default export

const store = configureStore({
    reducer: {
        userInfo: userReducer,  // ✅ use the reducer, not the slice
    },
});

export default store;
