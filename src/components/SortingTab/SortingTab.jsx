import React from "react";
import useFilters from "../../hooks/useFilters";
import SortIconHigh from "../../assets/SortIconLow";
import SortIconLow from "../../assets/SortIconLow";
import './SortingTab.scss'
import {useSelector} from "react-redux";

const SortingTab = () => {
    const {setSorting} = useFilters()
    const {sortMethod, mobileFilters} = useSelector(state => state.filter)
    return (
        <div className={'sorting-tab'}>
            <button className={`${sortMethod === 'asc' ? 'active-sort_btn' : null}`}
                    onClick={() => setSorting('asc')}>Price: Low to High <SortIconHigh/></button>
            <button className={`${sortMethod === 'desc' ? 'active-sort_btn' : null}`}
                    onClick={() => setSorting('desc')}>Price: High to Low <SortIconLow/></button>
            <button  className={'show-mobile-filters'}>show</button>
        </div>
    )
}
export default SortingTab