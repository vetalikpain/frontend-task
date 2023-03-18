import React from "react";
import {useSelector} from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.scss'
import {sortProducts} from "../../../helpers/sortProducts";
import {getFilteredProducts} from "../../../helpers/getFilteredProducts";

const ProductsList = () => {
    const products = useSelector(state => {
        const products = state.products.productsList;
        const filters = state.filter;
        const filteredProducts = getFilteredProducts(filters, products);
        const isSomeFilterApplyed = !!filters.brands.length || !!filters.prices.length;
        const sortingProducts = sortProducts(filters, !isSomeFilterApplyed ? products : filteredProducts)

        return sortingProducts
    })

    return (
        <div className={'products-list'}>
            {products.map(el => {
                return (<ProductItem product={el} key={el.id}/>)
            })}
        </div>
    )
}

export default ProductsList