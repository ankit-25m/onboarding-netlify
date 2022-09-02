import React from "react";

const Home = ({ formData, setFormData }) => {
  return (
    <div className="home-page">
      <div className="head-text">
        <h2>Let's set up a home for all your workspace</h2>
        <p>You can always create another workspace later.</p>
      </div>
      <div className="form-inputs-home">
        <div>Workspace Name</div>
        <input
          type="text"
          placeholder="Eden"
          value={formData.workSpaceName}
          onChange={(e) =>
            setFormData({ ...formData, workSpaceName: e.target.value })
          }
        />
        <div>
          Workspace URL<span>(optional)</span>
        </div>
        <div className="url-box">
          <div type="overlap-text">www.eden.com/</div>
          <input
            type="url"
            placeholder="Example"
            value={formData.workspaceURL}
            onChange={(e) =>
              setFormData({ ...formData, workspaceURL: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
