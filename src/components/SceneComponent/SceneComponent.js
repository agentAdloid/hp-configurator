import React from "react";
import "./SceneComponent.css";
class SceneComponent extends React.Component {

  //alter these functions to show 3d animations
  slide = () => {
    console.log("sliding");
  };
  tilt = () => {
    console.log("tilting");
  };
  showPorts = () => {
    console.log("showing Ports");
  };
  showGsyncTech = () => {
    console.log("showing Gsync Tech");
  };
  showFirstImg = () => {
    console.log("Showing first img");
  };
  showSceondImg = () => {
    console.log("Showing sec img");
  };
  showThirdImg = () => {
    console.log("Showing third img");
  };
  showFourthImg = () => {
    console.log("Showing fourth img");
  };
  showFifthImg = () => {
    console.log("Showing fifth img");
  };
  render() {
    return (
      <div className="sceneContainer">
      </div>
    );
  }
}
export default SceneComponent;
