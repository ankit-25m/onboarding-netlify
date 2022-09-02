import React, { useState } from "react";
import logo from "../assets/logo.PNG";
import Welcome from "./Welcome";
import Home from "./Home";
import Tellus from "./Tellus";
import Final from "./Final";
import Progress from "./Progress";

const Form = () => {
  const formArr = ["welcome", "home", "tellus", "final"];
  const [pageNumber, setPageNumber] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workSpaceName: "",
    workspaceURL: "",
    workSpaceType: "myself",
  });

  const changePage = () => {
    if (pageNumber === 1) {
      return <Welcome formData={formData} setFormData={setFormData} />;
    } else if (pageNumber === 2) {
      return <Home formData={formData} setFormData={setFormData} />;
    } else if (pageNumber === 3) {
      return <Tellus formData={formData} setFormData={setFormData} />;
    } else {
      return <Final formData={formData} setFormData={setFormData} />;
    }
  };

  const changeData = () => {
    if (pageNumber === formArr.length) {
      return "Launch Eden";
    } else {
      return "Create Workspace";
    }
  };

  return (
    <div className="main-wrapper">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="progress-box">
        <Progress formArr={formArr} pageNumber={pageNumber} />
        <div
          className="fill-bar"
          style={{
            width:
              pageNumber === 1
                ? "10%"
                : pageNumber === 2
                ? "35%"
                : pageNumber === 3
                ? "60%"
                : "70%",
          }}
        ></div>
      </div>
      <div className="form-container">
        {/* form goes in here */}
        {changePage()}
      </div>
      <button
        onClick={() => {
          if (pageNumber === formArr.length) {
            console.log(formData);
            return;
          } else {
            setPageNumber(pageNumber + 1);
          }
        }}
      >
        {changeData()}
      </button>
    </div>
  );
};

export default Form;
