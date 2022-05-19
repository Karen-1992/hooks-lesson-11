import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [initState, setInitState] = useState("Блок");
    const prevState = useRef();
    const handleChangeBlock = () => {
        prevState.current.style.width = (
            initState === "Блок" ? "80px" : "60px");
            prevState.current.style.height = (
        initState === "Блок" ? "150px" : "40px");
            prevState.current.textContent = (
        initState === "Блок" ? "Text" : "Блок");
        setInitState(prevState => (
            prevState === "Блок" ? "Text" : "Блок"
        ));
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <button
                className="btn btn-secondary mx-auto m-3"
                onClick={handleChangeBlock}
            >
                Изменить блок
            </button>
            <div
                ref={prevState}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
