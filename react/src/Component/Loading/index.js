import React from "react";
import style from "./index.module.<%- locals.preprocessor %>";

const LoadingComponent = () => {
    return (
        <div className={style.loading__element}>
            loading...
        </div>
    )
}

export default React.memo(LoadingComponent);