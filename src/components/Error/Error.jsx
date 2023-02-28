import React from "react";
import Lottie from "lottie-react";
import error from "../../assets/error.json";

function Error() {

    const style = {
        height: 300
    };

    return <Lottie animationData={error} loop={true} style={style} />;
}

export default Error;