import React from "react";
import Icon from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/fire";
import volcanoIcon from "@iconify-icons/noto-v1/volcano";
import seaLevelRise from "@iconify-icons/openmoji/sea-level-rise";

const LocationMarker = ({ showInfo, categoryId }) => {
  let icon = "";
  if (categoryId === 8) {
    icon = fireIcon;
  } else if (categoryId === 10) {
    icon = volcanoIcon;
  } else if (categoryId === 15) {
    icon = seaLevelRise;
  }

  const showInfoDialog = () => {
    showInfo();
  };

  return (
    <div className="location-marker" onClick={showInfoDialog}>
      <Icon className="location-icon" icon={icon}></Icon>
    </div>
  );
};

export default LocationMarker;
