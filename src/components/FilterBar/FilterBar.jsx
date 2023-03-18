import React, {useState} from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import Slider from '@mui/material/Slider';

import useProductFilter from "../../hooks/useFilters";
import {brands, price} from "../../db/filters";

import './FilterBar.scss'


const FilterBar = () => {
    const {showMobileFilters, applyFilters} = useProductFilter()

    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([0, 2000]);

    const handleApply = () => applyFilters({brands: selectedBrands, prices: selectedPrices})
    const handleReset = () => {
        setSelectedBrands([])
        setSelectedPrices([0, 2000])
        applyFilters({brands: '', prices: ''})
    }
    const handleBrandChange = (checked, brand) => {
        const newBrands = checked ? selectedBrands.filter((entity) => entity !== brand) : selectedBrands.concat(brand)
        setSelectedBrands(newBrands)
    }

    const handlePriceChange = (event, newValue) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        setSelectedPrices(newValue);
    };

    return (
        <div className={`filters-container ${showMobileFilters ? 'show-mobile-filters' : null}`}>
            <div className="brands-filters">
                <div className={'filter-title_wrapper'}>
                    <h4>Brands</h4>
                    <button className={'apply-button-mobile'} onClick={handleApply}>Apply</button>
                </div>
                <FormGroup>
                    {brands.map((brand) => {
                        const checked = selectedBrands.includes(brand);
                        return <FormControlLabel
                            control={<Checkbox onChange={() => handleBrandChange(checked, brand)} checked={checked}/>}
                            label={brand}/>
                    })}
                </FormGroup>
            </div>
            <div className="range-filters">
                <div className={'filter-title_wrapper'}>
                    <h4>Price range</h4>
                    <button className={'apply-button-mobile'} onClick={handleApply}>Apply</button>
                </div>
                <div className={'slider-wrapper'}>
                    <Slider
                        min={price[0]}
                        max={price[1]}

                        step={1}
                        value={selectedPrices}
                        onChange={handlePriceChange}
                    />
                </div>
                <div className={'inputs-wrapper'}>
                    <label htmlFor="{'min'}">
                        Min
                        <input id={'min'} type="text" value={selectedPrices[0]}/>
                    </label>
                    <label htmlFor="{'max'}">
                        Max
                        <input id={'max'} type="text" value={selectedPrices[1]}/>
                    </label>
                </div>
            </div>
            <div className="button-wrapper">
                <button className={'apply-button'} onClick={handleApply}>Apply</button>
                <button className={'reset-button'} onClick={handleReset}>Reset filter</button>
            </div>
        </div>
    );
};

export default FilterBar;