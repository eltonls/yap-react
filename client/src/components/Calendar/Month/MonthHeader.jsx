import React from "react";
import Styles from "./MonthHeader.module.css";

const MonthHeader = () => {
    return (
        <div className={Styles["month-header"]}> 
            <ul className={Styles["month-header__list"]}>
                <li className={Styles["month-header__weekday"]}>Dom</li>
                <li className={Styles["month-header__weekday"]}>Seg</li>
                <li className={Styles["month-header__weekday"]}>Ter</li>
                <li className={Styles["month-header__weekday"]}>Qua</li>
                <li className={Styles["month-header__weekday"]}>Qui</li>
                <li className={Styles["month-header__weekday"]}>Sex</li>
                <li className={Styles["month-header__weekday"]}>Sab</li>
            </ul>
        </div>
    )
}

export default MonthHeader;
