import React from "react";
// import CardWrapper from "../../common/Card";

const withFunctions = (Component) => () => {
    const isAuth = localStorage.getItem("user");
    console.log(isAuth);
    const onLogin = () => {
        localStorage.setItem("user", "login");
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
    };
    return (
        <Component {...{ isAuth, onLogin, onLogOut }} />
    );
};

export default withFunctions;
