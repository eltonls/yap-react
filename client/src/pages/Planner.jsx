import Calendar from "../components/Calendar/Calendar";
import Styles from "./Planner.module.css";

const Planner = () => {
  return(
    <section className={Styles["planner"]}>  
      <Calendar />
    </section>
  )
}

export default Planner;
