import React from "react";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import Detail from "../Detail/Detail";
import "./products.css";

function Products(props) {

    function renderProduct(item) {
        return (
            <Link to={"/DetailPage/" + item.id} element={<Detail />} key={item.id}>
                <ProductCard product={item} />
            </Link> 
        );
    }

    return(
        <div className="main-container">
            {props.data.map(renderProduct)}
        </div>
    );
}

export default Products;