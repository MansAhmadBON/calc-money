import React from "react";

const Calc = () => {
    return (
        <div className="container-content">
            <div className="content">
                <div className="calc-content">
                    <h1 className="content__title">Calculator</h1>
                    <input className="calc-content__inp" placeholder="Сумма, грн"/>
                    <button className="calc-content__btn">Count up</button>
                </div>
            </div>
        </div>
    )
};

export default Calc;