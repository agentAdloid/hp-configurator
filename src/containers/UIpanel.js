import React from "react";
import "./UIpanel.css";
import Aux from "../hoc/Aux";
import SceneComponent from "../components/SceneComponent/SceneComponent";
import SidePanel from "../components/SidePanel/SidePanel";
class UIpanel extends React.Component {
  slide = () => {
    this.refs.sceneComponent.slide();
  };
  tilt = () => {
    this.refs.sceneComponent.tilt();
  };
  showPorts = () => {
    this.refs.sceneComponent.showPorts();
  };
  showPorts = () => {
    this.refs.sceneComponent.showPorts();
  };
  showGsyncTech = () => {
    this.refs.sceneComponent.showGsyncTech();
  };
  showFirstImg = () => {
    this.refs.sceneComponent.showFirstImg();
  };
  showSceondImg = () => {
    this.refs.sceneComponent.showSceondImg();
  };
  showThirdImg = () => {
    this.refs.sceneComponent.showThirdImg();
  };
  showFourthImg = () => {
    this.refs.sceneComponent.showFourthImg();
  };
  showFifthImg = () => {
    this.refs.sceneComponent.showFifthImg();
  };
  render() {
    return (
      <Aux>
        <SidePanel
          slide={this.slide}
          tilt={this.tilt}
          showPorts={this.showPorts}
          showGsyncTech={this.showGsyncTech}
          showFirstImg={this.showFirstImg}
          showSceondImg={this.showSceondImg}
          showThirdImg={this.showThirdImg}
          showFourthImg={this.showFourthImg}
          showFifthImg={this.showFifthImg}
        />
        <SceneComponent ref="sceneComponent" />
      </Aux>
    );
  }
}
export default UIpanel;
