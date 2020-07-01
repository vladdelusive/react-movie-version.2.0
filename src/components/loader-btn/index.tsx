import React from "react";
import "./style.css";

interface StandardComponentProps {
    handlerLoading(): void,
    children: React.ReactNode | string,
}

export const BtnLoader = React.memo<StandardComponentProps>((props) => {
    const { children, handlerLoading } = props
    return (
        <div className="btn btn-loading">
          <button onClick={handlerLoading}>{children}</button>
        </div>
    );
})
