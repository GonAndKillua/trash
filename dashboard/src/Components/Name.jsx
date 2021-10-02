import img2 from "../img/team-3-1.svg";
import classes from "./name.module.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function Name() {
  return (
    <Dropdown>
      <div className={classes["group-2"]}>
        <img className={classes["team-3"]} src={img2} />
        <div className={classes["group-1"]}>
          <div className={classes["overlap-group"]}>
            <Dropdown.Toggle variant="Secondary" className={classes["name"]}>
              Angelina Doe
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">My Account</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </div>
      </div>
    </Dropdown>
  );
}
