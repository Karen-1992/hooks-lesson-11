import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
    const onLogin = () => {
        localStorage.setItem("user", "login");
        setIsAuth(prevState => !prevState);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(prevState => !prevState);
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
