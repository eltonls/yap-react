import React from "react";
import MonthBlock from "./MonthBlock";
import MonthHeader from "./MonthHeader";
import PaddingBlock from "./PaddingBlock";
import Styles from "./Month.module.css";

const Month = (props) => {

  console.log(props.daysArray);

    const dayClickHandler = (evt) => { 
        console.log(evt.target.children[0].innerText);
        props.weekClickHandler(evt.target.children[0].innerText);
    }

  return (
    <React.Fragment>
        <MonthHeader/>
        <div className={Styles["month"]}> 
          {
            props.paddingBlockArr.map(() => {
              return <PaddingBlock />
            })
          }
          {
            props.daysArray.map((num) => {
              return <MonthBlock num={num} sendDayNumber={dayClickHandler} />
            })
          }
        </div>
    </React.Fragment>
  )
}

export default Month;
