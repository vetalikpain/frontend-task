export const sortProducts = (filters, products) => {
    const {sorting} = filters
    const sort = (products) => {
        if (sorting === 'asc') {
            return [...products].sort((a, b) => (a.price > b.price ? 1 : -1))
        }
        if (sorting === 'desc') {
            return [...products].sort((a, b) => (a.price < b.price ? 1 : -1))
        }
        return products;
    }
    return sort(products)
}