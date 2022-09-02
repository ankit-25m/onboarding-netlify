import React from "react";

const Progress = ({ formArr, pageNumber }) => {
  return (
    <div className="progress">
      {formArr.map((step, ind) => (
        <div key={ind} className={ind + 1 <= pageNumber ? "fill-circle" : ""}>
          {ind + 1}
        </div>
      ))}
    </div>
  );
};

export default Progress;
