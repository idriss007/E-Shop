import React from "react";
import Products from "../../pages/Products";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../../pages/Detail/Detail";

function Home() {

    const {loading, data, error} = useFetch(process.env.REACT_APP_API_URL);

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />;
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products data={data} />} />
                <Route path="/DetailPage" element={<Detail />}>
                    <Route path=":idd" element={<Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Home;