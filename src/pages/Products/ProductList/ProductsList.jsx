import React from "react";
import {useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import ProductItem from "../ProductItem/ProductItem";
import {sortProducts} from "../../../helpers/sortProducts";
import {getFilteredProducts} from "../../../helpers/getFilteredProducts";

import './ProductList.scss'
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
                return (<ProductItem product={el} key={uuidv4()}/>)
            })}
        </div>
    )
}

export default ProductsList