import React from "react";
import "./SceneComponent.css";
class SceneComponent extends React.Component {

  //alter these functions to show 3d animations
  slide = () => {
    alert("sliding");
  };
  tilt = () => {
    alert("tilting");
  };
  showPorts = () => {
    alert("showing Ports");
  };
  showGsyncTech = () => {
    alert("showing Gsync Tech");
  };
  showFirstImg = () => {
    alert("Showing first img");
  };
  showSceondImg = () => {
    alert("Showing sec img");
  };
  showThirdImg = () => {
    alert("Showing third img");
  };
  showFourthImg = () => {
    alert("Showing fourth img");
  };
  showFifthImg = () => {
    alert("Showing fifth img");
  };
  render() {
    return (
      <div className="sceneContainer">
      </div>
    );
  }
}
export default SceneComponent;
