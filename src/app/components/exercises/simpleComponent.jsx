import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <button
            type="button"
            className="btn btn-primary mx-auto m-2"
            onClick={isAuth ? onLogOut : onLogin}
        >
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
