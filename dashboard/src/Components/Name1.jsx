import classes from "./name1.module.css";
import img from "../img/team-3.svg";

export default function Name1() {
  return (
    <div className={classes["group-2"]}>
      <img className={classes["team-3"]} src={img} />
      <div className={classes["group-1"]}>
        <div className={classes["overlap-group"]}>
          <div className={classes["name-1"]}>Angelina Doe</div>
          <div className={classes["project-manager"]}>Project Manager</div>
        </div>
      </div>
    </div>
  );
}
