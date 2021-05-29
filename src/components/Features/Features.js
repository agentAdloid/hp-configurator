import React, { useState } from "react";
import "./Features.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const Features = (props) => {
  const [listShow, setlistShow] = useState(false);
  let Icon;
  if(listShow===false)
  {   Icon = (<AddIcon size="large" className="plusIcon" fontSize="large"/>
      );
  }
  else
      Icon=(  <RemoveIcon size="large" className="plusIcon" fontSize="large"/>
      );
  let Featurelist = (
    <div className="featuresList">
      <div className="listsTag" onClick={props.showGsyncTech}>
        <AddCircleOutlineIcon fontSize="medium" className="minus"/>
        <p>NVIDIA G-SYNC Technology</p>
      </div>
    </div>
  );
  if (listShow === false) {
    Featurelist = null;
  }
  return (
    <div className="featuresContainer">
      <div
        className="featuresTag"
        onClick={() => {
          setlistShow(!listShow);
        }}
      >
         {Icon}
        <p>Features</p>
      </div>
      {Featurelist}
    </div>
  );
};

export default Features;
