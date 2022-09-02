import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Final = ({ formData, setFormData }) => {
  return (
    <div className="final-page">
      <BsFillCheckCircleFill className="check-icon" />
      <div className="head-text">
        <h2>Congratulations, {formData.displayName}!</h2>
        <p>You have completed onboarding, you can start using the Eden.</p>
      </div>
    </div>
  );
};

export default Final;
