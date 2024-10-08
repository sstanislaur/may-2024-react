import React, { useEffect,  useState } from "react";
import Product from "./Product";

interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    thumbnail: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]); // Типізуємо масив продуктів
    const [loading, setLoading] = useState<boolean>(true);

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
