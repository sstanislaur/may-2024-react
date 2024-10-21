import axios from 'axios';
import { Product } from '../interfaces/Product';

const BASE_URL = 'https://dummyjson.com/products';
const PAGE_SIZE = 7;

export const getProducts = async (page: number): Promise<{ products: Product[], total: number }> => {
    const response = await axios.get(`${BASE_URL}?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`);
    return {
        products: response.data.products,
        total: response.data.total,
    };
};
