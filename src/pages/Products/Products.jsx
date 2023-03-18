import React from "react";

import ProductsList from "../../components/ProductList/ProductsList";
import SortingTab from "../../components/SortingTab/SortingTab";
import FilterBar from "../../components/FilterBar/FilterBar";


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