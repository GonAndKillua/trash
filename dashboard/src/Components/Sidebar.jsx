import Name1 from "./Name1";
import "./sidebar.css";
import Addproject from "./Addproject";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <h1 className="title">blueBox</h1>
        <Name1 />
        <div className="text-0">
          <span className="span0">
            Dashboard
            <a style={{ marginLeft: "2rem" }}>
              <i class="bi bi-house-door-fill"></i>
            </a>
            <br />
          </span>
          <div className="span1">
            <span>
              UI Elements
              <a style={{ marginLeft: "1.5rem" }}>
                <i class="bi bi-people-fill"></i>
              </a>
              <br />
              Components
              <a style={{ marginLeft: "1rem" }}></a>
              <i class="bi bi-calendar3-event-fill"></i>
              <br />
              Forms Stuff
              <a style={{ marginLeft: "1.5rem" }}>
                <i class="bi bi-ui-checks-grid"></i>
              </a>
              <br />
              Data Table
              <a style={{ marginLeft: "2rem" }}>
                <i class="bi bi-file-earmark-spreadsheet-fill"></i>
              </a>
              <br />
              Icons
              <a style={{ marginLeft: "4.5rem" }}>
                <i class="bi bi-chat-quote"></i>
              </a>
              <br />
              Sample Page
              <a style={{ marginLeft: ".5rem" }}>
                <i class="bi bi-file-break"></i>
              </a>
              <br />
              Extra
              <a style={{ marginLeft: "4.5rem" }}>
                <i class="bi bi-file-earmark-plus-fill"></i>
              </a>
            </span>
          </div>
        </div>
        <Addproject />
      </div>
    </>
  );
}
