import React from "react";
import useFilters from "../../hooks/useFilters";
import SortIconHigh from "../../assets/SortIconLow";
import SortIconLow from "../../assets/SortIconLow";
import './SortingTab.scss'
import FilterAlt from "../../assets/FilterAlt";
import CloseFiltersSvg from "../../assets/CloseFiltersSvg";

const SortingTab = () => {
    const {sortMethod, showMobileFilters, applySorting, applyMobileFilters} = useFilters()
    return (
        <div className={'sorting-tab'}>
            <button className={`${sortMethod === 'asc' ? 'active-sort_btn' : null}`}
                    onClick={() => applySorting('asc')}>Price: Low to High <SortIconHigh/></button>
            <button className={`${sortMethod === 'desc' ? 'active-sort_btn' : null}`}
                    onClick={() => applySorting('desc')}>Price: High to Low <SortIconLow/></button>
            <button onClick={() => applyMobileFilters()} className={'show-mobile-filters'}>
                {showMobileFilters === false ? <FilterAlt/> : <CloseFiltersSvg /> }
            </button>
        </div>
    )
}
export default SortingTab