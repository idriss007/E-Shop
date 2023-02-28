import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";
import "./detail.css";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

function Detail() {

    const { idd } = useParams();

    /*const location = useLocation();
    const id = location.state.pageId;*/
    const {loading, error, data} = useFetch(process.env.REACT_APP_API_URL + "/" + idd /*id*/);

    if(loading) {
        return <Loading />
    }

    if(error || data.id === undefined) {
        return <Error />;
    }
    

    return(
        <div className="detail-container">
            <div className="image-container">
                <img src={data.image} className="image" />
            </div>
            <div className="desc-container">
                <p className="title">{data.title}</p>
                <p className="desc">{data.description}</p>
                <p className="price">{data.price} ₺</p>
            </div>
            
        </div>
    );
}

export default Detail;