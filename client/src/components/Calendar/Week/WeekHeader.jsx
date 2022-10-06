import { getDate } from "date-fns";
import Styles from "./WeekHeader.module.css";

const WeekHeader = (props) => {
    return (
        <div> 
            <ul className={Styles["week-header__week-list"]}>
                <li className={Styles["week-header__weekday"]}>Hours</li>
                <li className={Styles["week-header__weekday"]}>Dom</li> 
                <li className={Styles["week-header__weekday"]}>Seg</li>
                <li className={Styles["week-header__weekday"]}>Ter</li>
                <li className={Styles["week-header__weekday"]}>Qua</li>
                <li className={Styles["week-header__weekday"]}>Qui</li>
                <li className={Styles["week-header__weekday"]}>Sex</li>
                <li className={Styles["week-header__weekday"]}>Sab</li>
            </ul>
            <ul className={Styles["week-header__number-list"]}>
                <li className={Styles["week-header__day-num"]}></li>
                { props.days.map((day) => {
                    return (
                        <li className={Styles["week-header__day-num"]}>
                            {getDate(day)}
                        </li>
                    )
                }) } 
            </ul>
        </div>
    )
}

export default WeekHeader;
