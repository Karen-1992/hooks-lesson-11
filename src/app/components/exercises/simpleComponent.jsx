import React from "react";
import CardWrapper from "../common/Card";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <CardWrapper>
            {isAuth !== null
                ? (
                    <button
                        type="button"
                        onClick={onLogOut}
                    >
                        Выйти
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={onLogin}
                    >
                        Войти
                    </button>
                )
            }
        </CardWrapper>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
