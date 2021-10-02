import Searchproject from "./Searchproject";
import Name from "./Name";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navebar">
      <div className="nav">
        <Searchproject />
        <Name />
      </div>
    </div>
  );
}
