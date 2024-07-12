import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../assets/css/onlyProduct.css';

interface Product {
    id: number;
    name: string;
    price: number;
    sizes: string[];
    imageUrl: string;
    description: string;
    fit: string;
    notes: string;
    maleModel: string;
    femaleModel: string;
}

const Product: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        axios.get('http://localhost:5000/product')
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the product data!', error);
            });
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
                <h1>{product.name}</h1>
                <p>{product.price}đ</p>
                <div className="sizes">
                    {product.sizes.map(size => (
                        <button key={size} className="size-button">{size}</button>
                    ))}
                </div>
                <button className="add-to-cart">THÊM VÀO GIỎ</button>
                <button className="buy-now">MUA NGAY</button>
                <p>{product.description}</p>
                <p>{product.fit}</p>
                <p>{product.notes}</p>
                <p>{product.maleModel}</p>
                <p>{product.femaleModel}</p>
            </div>
        </div>
    );
};

export default Product;
