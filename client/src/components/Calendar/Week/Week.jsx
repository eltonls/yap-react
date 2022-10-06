import React, { useState } from "react";
import CalendarNav from "../CalendarNav";
import WeekHeader from "./WeekHeader";
import Styles from "./Week.module.css";

const Week = (props) => { 
   return (
        <React.Fragment> 
            <WeekHeader days={props.weekDays} />
            <div className={Styles["week"]}>
                {props.weekDays.map((day) => {
                    return <div>Dia</div>
                })}
            </div>
        </React.Fragment>
   ) 
}

export default Week;
