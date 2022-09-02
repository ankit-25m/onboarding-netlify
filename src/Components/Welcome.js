import React from "react";

const Welcome = ({ formData, setFormData }) => {
  return (
    <div className="first-page">
      <div className="head-text">
        <h2>Welcome! First things first...</h2>
        <p>You can always change them later.</p>
      </div>
      <div className="form-inputs-welcome">
        <div>Full Name</div>
        <input
          type="text"
          placeholder="steve jobs"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <div>Display Name</div>
        <input
          type="text"
          placeholder="steve"
          value={formData.displayName}
          onChange={(e) =>
            setFormData({ ...formData, displayName: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Welcome;
