import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        brands: [],
        prices: [],
        sortMethod: 'asc',
        showMobileFilters: false,
    },
    reducers: {
        setBrandsFilter: (state, action) => {
            state.brands = action.payload;
        },
        setPricesFilter: (state, action) => {
            state.prices = action.payload;
        },
        setSort: (state, action) => {
            state.sortMethod = action.payload;
        },
        setShowMobileFilters: (state) => {
            state.showMobileFilters = !state.showMobileFilters;
        },
    },
});

export const { setBrandsFilter, setPricesFilter, setSort, setShowMobileFilters } = filterSlice.actions;

export default filterSlice.reducer;


