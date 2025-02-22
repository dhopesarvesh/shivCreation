import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./shopall.css";

const products = [
    {
        id: 1,
        name: "6 Blossoming Lotuses Rangoli",
        price: 599,
        image: "lotus.png",
    },
    {
        id: 2,
        name: "6 Flowers Rangoli Pink",
        price: 449,
        image: "flowers_pink.png",
    },
    {
        id: 3,
        name: "6 Flowers Rangoli Pink and Red",
        price: 449,
        image: "flowers_pink_red.png",
    },
    {
        id: 4,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
    },
    {
        id: 5,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
      },
      {
        id: 6,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
      },
      {
        id: 7,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
      },
      {
        id: 8,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
      },
      {
        id: 9,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
      },
      {
        id: 10,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
      },
      {
        id: 11,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
      },
      {
        id: 12,
        name: "6 Peacock Feathers Rangoli",
        price: 599,
        image: "peacock_feathers.png",
      },
];

const ProductGrid = () => {
    const [cart, setCart] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const pageNumbers = {
        "/shopall": 1,
        "/page2": 2,
        "/page3": 3, // Add more pages if needed
      };
    const currentPage = pageNumbers[location.pathname] || 2;




    const updateQuantity = (id, change) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: Math.max((prevCart[id] || 0) + change, 0),
        }));
    };


    return (
        <div className="scontainer">
            <h1>Products</h1>
            <div className="filters">
                <span>Filter: <select><option>Availability</option></select></span>
                <span>Price: <select><option>Sort by Price</option></select></span>
                <span>Sort by: <select><option>Alphabetically, A-Z</option></select></span>
                <span>{products.length} products</span>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">Rs. {product.price}.00</p>
                        <div className="quantity-selector">
                            <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                            <span>{cart[product.id] || 0}</span>
                            <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button className="navigate-button" onClick={() => navigate("/page2")}
                >
                    Previous
                </button>
                <span className="current-page">{currentPage}</span>
                <button className="navigate-button" onClick={() => navigate("")}>
                    Next
                </button>
            </div>

        </div>


    );
};

export default ProductGrid;
