import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.scss'


const getFilteredProducts = (filters, products) => {
    const {brands, prices: [min, max]} = filters;

    const filterByBrands = products.filter((product) => brands.includes(product.brand));

    const filterByPrices = (result) => result.filter((r) => r.price > min && r.price < max)

    const filteredProducts = filterByPrices(filterByBrands.length ? filterByBrands : products)

    return filterByPrices(filteredProducts.length ? filteredProducts : products)
};
const sortProducts = (filters, products) => {
    const {sorting} = filters

    const sort = (products) => {
        if (sorting === 'asc') {
            return products.sort((a, b) => (a.price > b.price ? 1 : -1))
        }
        if (sorting === 'desc') {
            return products.sort((a, b) => (a.price < b.price ? 1 : -1))
        }
        return products;
    }
    return sort(products)
}


const ProductsList = () => {
    const products = useSelector(state => {
        const products = state.products.productsList;
        const filters = state.filter;
        const filteredProducts = getFilteredProducts(filters, products);
        const isSomeFilterApplyed = !!filters.brands.length || !!filters.prices.length;
        const sortingProducts = sortProducts(filters, filteredProducts)

        return !isSomeFilterApplyed ? products : sortingProducts
    })

    return (
        <div className={'products-list'}>
            {products.map(el => {
                return (<ProductItem product={el}/>)
            })}
        </div>
    )
}

export default ProductsList