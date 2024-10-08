import React from "react";

const Product = ({product}) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <img src={product.thumbnail} alt={product.title}/>
        </div>
    );
};

export default Product;
