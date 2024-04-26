import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://localhost:8081/products');
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                {/* ...existing Skeleton placeholders... */}
            </>
        );
    };

    const ShowProducts = () => {
        // Function to select an icon based on the category ID
        const categoryIcon = (categoryId) => {
            switch (categoryId) {
                case 'category1Id': return <i className="fas fa-laptop-code"></i>;
                case 'category2Id': return <i className="fas fa-mobile-alt"></i>;
                // Add more cases for different categories
                default: return <i className="fas fa-box-open"></i>;
            }
        };

        return (
            <>
                <div className="col-md-9 py-md-3">
                    <div className="row">
                        {data.map((product) => {
                            return (
                                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.ID}>
                                    <div className="card h-100 text-center">
                                        <div className="card-body">
                                            {/* Here we call categoryIcon to get the icon for the product's category */}
                                            {categoryIcon(product.category_id)}
                                            <h5 className="card-title mt-2">{product.name}</h5>
                                            <p className="card-text">${product.price}</p>
                                        </div>
                                        <div className="card-footer">
                                            <NavLink to={`/products/${product.ID}`} className="btn btn-primary">
                                                Details
                                            </NavLink>
                                            <button className="btn btn-warning ml-2" onClick={() => {/* Logic to handle adding to cart */}}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    );
}

export default Products;
