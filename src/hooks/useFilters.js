import {useSelector, useDispatch} from 'react-redux';
import {setBrandsFilter, setPricesFilter, setSort, setShowMobileFilters} from '../redux/filterReducer';

const useProductFilter = () => {
    const dispatch = useDispatch();
    const {showMobileFilters, sortMethod, brandFilter, priceFilter} = useSelector((state) => state.filter)
    const applyFilters = (filters) => {
        const {brands, prices} = filters;

        dispatch(setBrandsFilter(brands));
        dispatch(setPricesFilter(prices));
    }

    const applySorting = (sortMethod) => {
        dispatch(setSort(sortMethod))
    };

    const applyMobileFilters = () => {
        dispatch(setShowMobileFilters())
    }

    return {brandFilter, priceFilter, showMobileFilters, sortMethod, applyFilters, applySorting, applyMobileFilters};
};
export default useProductFilter