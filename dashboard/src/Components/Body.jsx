import Center from "./Center";
import Center2 from "./Center2";
import Center3 from "./Center3";
import Table from "./Table";

import "./body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="square">
        <div className="dashboard">
          <span>Dashboard</span>
        </div>
      </div>

      <div className="d-flex">
        <Center />
        <Center2 />
        <Center3 />
      </div>
      <Table />
    </div>
  );
};

export default Body;
