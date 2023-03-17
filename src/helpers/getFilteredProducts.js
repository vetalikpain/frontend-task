export const getFilteredProducts = (filters, products) => {
    const {brands, prices: [min, max]} = filters;

    const filterByBrands = products.filter((product) => brands.includes(product.brand));
    const filterByPrices = (products) => products.filter((product) => product.price > min && product.price < max)

    const filteredProducts = filterByPrices(filterByBrands.length ? filterByBrands : products)

    return filterByPrices(filteredProducts.length ? filteredProducts : products)
};
