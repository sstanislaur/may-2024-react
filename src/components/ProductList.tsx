import React, { useEffect, useState } from 'react';
import { Product } from '../interfaces/Product';
import { getProducts } from '../services/productService';

const PAGE_SIZE = 7;

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    const fetchProducts = async (page: number) => {
        setLoading(true);
        try {
            const { products, total } = await getProducts(page);
            setProducts(products);
            setTotalPages(Math.ceil(total / PAGE_SIZE));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <h1>Products</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                                <img src={product.thumbnail} alt={product.title} width="100" />
                            </li>
                        ))}
                    </ul>

                    <div>
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span> Page {currentPage} of {totalPages} </span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
