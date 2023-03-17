import React from "react";
import ProductsList from "../../components/ProductList/ProductsList";
import SortingTab from "../../components/SortingTab/SortingTab";
import FilterBar from "../../components/FilterBar/FilterBar";
import './Products.scss'
import {useSelector} from "react-redux";
const Products = () => {
    const filterProducts = useSelector(state => state.products.filterProductsList)
    return (
        <>
            <SortingTab/>
            <div className={'products-page_container'}>
                <FilterBar />
                <ProductsList products={filterProducts} />
            </div>


        </>
    )
}
export default Products