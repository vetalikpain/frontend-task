import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    filter: filterReducer
})

export const store = configureStore({
    reducer: rootReducer
})