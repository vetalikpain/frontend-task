import React from "react";
import {Link} from "react-router-dom";
import './ProductItem.scss'

const ProductItem = ({product}) => {

    return (

        <div className={'product-item_container'}>
            <div className={'product-img_wrapper'}>
                <img src={product.img} alt=""/>
            </div>
            <div className={'product-info_container'}>
                <h5>{product.name}</h5>
                <p className={'product-price'}>${product.price}</p>
                <p className={'product-brand'}>{product.brand}</p>
                <p className={'product-short-description'}>{product.shortDescription}</p>
                <Link to={`/product/${product.id}`}>View details</Link>
            </div>
        </div>

    )
}
export default ProductItem