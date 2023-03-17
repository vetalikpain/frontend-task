import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        brands: [],
        prices: [],
        sorting: ''
    },
    reducers: {
        setBrandsFilter: (state, action) => {
            state.brands = action.payload;
        },
        setPricesFilter: (state, action) => {
            state.prices = action.payload;
        },
        setSort: (state, action) => {
            state.sorting = action.payload;
        },
    },
});

export const { setBrandsFilter, setPricesFilter, setSort } = filterSlice.actions;

export default filterSlice.reducer;


