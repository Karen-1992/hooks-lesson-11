import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const handleLogin = () => {
        localStorage.setItem("user", "login");
    };
    const handleLogOut = () => {
        localStorage.removeItem("user");
    };
    const isAuth = !!localStorage.getItem("user");
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogOut={handleLogOut}
                onLogin={handleLogin}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
