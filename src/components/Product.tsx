import React, {FC} from "react";

interface IProps {
    product: {
        id: number;
        title: string;
        description: string;
        price: number;
        category: string;
        brand: string;
        thumbnail: string;
    };
}

const Product: FC<IProps> = ({product}) => {
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
