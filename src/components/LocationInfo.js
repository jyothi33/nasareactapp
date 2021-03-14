import React from "react";

const LocationInfo = ({ infoDialog }) => {
  return (
    <div className="locationInfo">
      <h3>{infoDialog.id}</h3>
      <h4>{infoDialog.title}</h4>
    </div>
  );
};

export default LocationInfo;
