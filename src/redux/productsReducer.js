import {createReducer} from "@reduxjs/toolkit";
import {products} from "../db/products";

const initialState = {
    productsList: products,
}

export default createReducer(initialState, {

})
