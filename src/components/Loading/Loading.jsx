import React from "react";
import Lottie from "lottie-react";
import loading from "../../assets/loading.json"

function Loading() {

    const style = {
        height: 300
    };

    return <Lottie animationData={loading} loop={true} style={style} />;
}

export default Loading;