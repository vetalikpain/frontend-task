import {createAction, createReducer} from "@reduxjs/toolkit";
import {products} from "../db/products";

const initialState = {
    productsList: products,
}

export const sortLowToHigh = createAction('SORT_LOW')
export const sortHighToLow = createAction('SORT_HIGH')
export const filterByBrand = createAction('FILTER_BY_BRAND')
export const filterByPrice = createAction('FILTER_BY_PRICE')
export default createReducer(initialState, {
    [sortLowToHigh]: function (state) {
        state.filterProductsList = state.filterProductsList.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
    [sortHighToLow]: function (state) {
        state.filterProductsList = state.filterProductsList.sort((a, b) => (a.price < b.price ? 1 : -1));
    },
    [filterByBrand]: function (state, action) {
        state.filterProductsList = state.productsList.filter(el => action.payload.includes(el.brand))
    },
    [filterByPrice]: function (state, action) {
        state.filterProductsList = state.productsList.filter(el => el.price > action.payload[0] && el.price < action.payload[1])
    }
})
