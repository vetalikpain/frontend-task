import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {products} from "../../db/products";
import './Product.scss'

const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        setProduct(products.find(el => el.id == id))
    }, [id])

    return (
        <div className={'product-info-container'}>
            <div className={'product-content'}>
                <div className={'product-img_wrapper'}>
                    <img src={product?.img} alt=""/>
                </div>
                <div className={'product-info_box'}>
                    <h3>{product?.name}</h3>
                    <p className={'product-price'}>${product?.price}</p>
                    <button>Buy</button>
                    <div className={'product-info_row row-underline category-row'}>
                        <p>Category:</p>
                        <p>{product?.category}</p>
                    </div>
                    <div className={'product-info_row'}>
                        <p>Type:</p>
                        <p>{product?.type}</p>
                    </div>
                    <div className={'product-info_row'}>
                        <p>Material:</p>
                        <p>{product?.material}</p>
                    </div>
                    <div className={'product-info_row row-underline '}>
                        <p>Design:</p>
                        <p>{product?.design}</p>
                    </div>
                </div>
            </div>
            <div className={'product-detail'}>
                {product?.description}
            </div>
        </div>
    )
}

export default Product