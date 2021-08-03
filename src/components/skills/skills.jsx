import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import StorageIcon from "@material-ui/icons/Storage";
import "./skills.css";
import { useState } from "react";
import python_logo from "../../asset/python_icon.png";
import mongodb_logo from "../../asset/mongodb_icon.png";
import visual_logo from "../../asset/VSCode_icon.svg.png";
const Skills = function () {
  const [activeSkill, setActiveState] = useState("coding");

  const handleChange = function (id) {
    setActiveState(id);
  };

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="tabs">
        <div className="tab-holder">
          <h2
            id="coding"
            onClick={() => {
              handleChange("coding");
            }}
            className={activeSkill === "coding" ? "active" : "inactive"}
          >
            <CodeIcon
              style={{ fontSize: 90, verticalAlign: "middle" }}
            ></CodeIcon>{" "}
            &nbsp;Coding
          </h2>

          <h2
            id="database"
            onClick={() => {
              handleChange("database");
            }}
            className={activeSkill === "database" ? "active" : "inactive"}
          >
            <StorageIcon
              style={{ fontSize: 90, verticalAlign: "middle" }}
            ></StorageIcon>{" "}
            &nbsp;Database
          </h2>

          <h2
            id="tools"
            onClick={() => {
              handleChange("tools");
            }}
            className={activeSkill === "tools" ? "active" : "inactive"}
          >
            <BuildIcon
              style={{ fontSize: 80, verticalAlign: "middle" }}
            ></BuildIcon>{" "}
            &nbsp; Tools
          </h2>
        </div>

        <div className="slider-container">
          <div
            className={
              activeSkill === "coding"
                ? "slider slider-0"
                : activeSkill === "tools"
                ? "slider slider-2"
                : "slider slider-1"
            }
          ></div>
        </div>

        <div className="tab-content">
          <div
            id="coding-content"
            className={activeSkill === "coding" ? "active-img" : "inactive-img"}
          >
            <img src={python_logo} alt="nope" className="logo" />
            <img src={python_logo} alt="nope" className="logo" />
            <img src={python_logo} alt="nope" className="logo" />
            <img src={python_logo} alt="nope" className="logo" />
            <img src={python_logo} alt="nope" className="logo" />
            <img src={python_logo} alt="nope" className="logo" />
          </div>

          <div
            id="database-content"
            className={
              activeSkill === "database" ? "active-img" : "inactive-img"
            }
          >
            <img src={mongodb_logo} alt="nope" className="logo" />
            <img src={mongodb_logo} alt="nope" className="logo" />
          </div>

          <div
            id="tools-content"
            className={activeSkill === "tools" ? "active-img" : "inactive-img"}
          >
            <img src={visual_logo} alt="nope" className="logo" />
            <img src={visual_logo} alt="nope" className="logo" />
            <img src={visual_logo} alt="nope" className="logo" />
            <img src={visual_logo} alt="nope" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
