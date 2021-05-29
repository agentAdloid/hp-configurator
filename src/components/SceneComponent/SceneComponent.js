import React from "react";
import "./SceneComponent.css";
import frontImg from "../../assets/Front.jpg";
import frontRightImg from "../../assets/FrontRight.jpg";
import SceneButtons from "../../components/SceneButtons/SceneButtons";
class SceneComponent extends React.Component {
  state = {
    selected: 0,
  };
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
    this.setState({selected:1});
    alert("Showing first img");
  };
  showSceondImg = () => {
    this.setState({selected:2});
    alert("Showing sec img");
  };
  showThirdImg = () => {
    this.setState({selected:3});
    alert("Showing third img");
  };
  showFourthImg = () => {
    this.setState({selected:4});
    alert("Showing fourth img");
  };
  showFifthImg = () => {
    this.setState({selected:5});
    alert("Showing fifth img");
  };
  render() {
    return (
      <div className="sceneContainer">
        <img src={frontRightImg} />
        <SceneButtons
          first={this.showFirstImg}
          second={this.showSceondImg}
          third={this.showThirdImg}
          fourth={this.showFourthImg}
          fifth={this.showFifthImg}
          selected={this.state.selected}
        />
      </div>
    );
  }
}
export default SceneComponent;
