import React from "react";
import style from "./index.module.less";

const LoadingComponent = () => {
    return (
        <div className={style.loading__element}>
            loading...
        </div>
    )
}

export default React.memo(LoadingComponent);