import { useSelector, useDispatch } from 'react-redux';
import { setBrandsFilter, setPricesFilter, setSort} from '../redux/filterReducer';

const useProductFilter = () => {
    const dispatch = useDispatch();
    const brandFilter = useSelector((state) => state.filter.brand);
    const priceFilter = useSelector((state) => state.filter.price);

    const applyFilters =  (filters) => {
        const {brands, prices} = filters;

        dispatch(setBrandsFilter(brands));
        dispatch(setPricesFilter(prices));
    }

    const setSorting = (sortMethod) => {
        dispatch(setSort(sortMethod))
    };

    return { brandFilter, priceFilter, applyFilters, setSorting };
};
export default useProductFilter