import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const onLogin = () => {
        localStorage.setItem("user", "login");
        setIsAuth(true);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogOut={onLogOut}
                onLogin={onLogin}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
