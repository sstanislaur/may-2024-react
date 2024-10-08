import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
