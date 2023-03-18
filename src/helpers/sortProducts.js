export const sortProducts = (filters, products) => {
    const {sortMethod} = filters
    const sort = (products) => {
        if (sortMethod === 'asc') {
            return [...products].sort((a, b) => (a.price > b.price ? 1 : -1))
        }
        if (sortMethod === 'desc') {
            return [...products].sort((a, b) => (a.price < b.price ? 1 : -1))
        }
        return products;
    }
    return sort(products)
}