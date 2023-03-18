import React from "react";

import ProductsList from "./ProductList/ProductsList";
import SortingTab from "./SortingTab/SortingTab";
import FilterBar from "./FilterBar/FilterBar";


import './Products.scss'

const Products = () => {
    return (
        <>
            <SortingTab/>
            <div className={'products-page_container'}>
                <FilterBar/>
                <ProductsList/>
            </div>


        </>
    )
}
export default Products