import React from "react";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
const Tellus = ({ formData, setFormData }) => {
  const [border, setBorder] = React.useState(false);

  const changeType = (event) => {
    if (event.currentTarget.classList.contains("myself")) {
      setBorder(!border);
      setFormData({ ...formData, workSpaceType: "myself" });
    } else if (event.currentTarget.classList.contains("team")) {
      setBorder(!border);
      setFormData({ ...formData, workSpaceType: "team" });
    }
  };

  return (
    <div className="tellus-page">
      <div className="head-text">
        <h2>How you are planning to use Eden?</h2>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className="form-inputs-tellus">
        <div
          className={"myself not-selected " + (border ? "" : "selected")}
          onClick={changeType}
        >
          <FaUser className="myself-icon" />
          <p>For myself</p>
          <p>Write better. Think more clearly. Stay organized.</p>
        </div>
        <div
          className={"team not-selected " + (border ? "selected" : "")}
          onClick={changeType}
        >
          <FaUsers className={"team-icon"} />
          <p>With my team</p>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default Tellus;
