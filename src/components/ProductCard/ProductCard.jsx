import React from "react";
import "./productCard.css";

function ProductCard(props) {
    return (
        <div /*onClick={props.onSelect}*/ className="container">
            <img className="product-image" src={props.product.image} />
            <div className="body-container">
                <p className="product-title">{props.product.title}</p>
                <p className="product-price">{props.product.price} ₺</p>
            </div>
        </div>
    );
}

export default ProductCard;