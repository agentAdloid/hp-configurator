import React from "react";
import "./SceneComponent.css";
import frontImg from "../../assets/Front.jpg";
import frontRightImg from "../../assets/FrontRight.jpg";
import tilt1 from "../../assets/tilt1.jpg";
import tilt2 from "../../assets/tilt2.jpg";
import rear from "../../assets/Rear.jpg";
import SceneButtons from "../../components/SceneButtons/SceneButtons";
class SceneComponent extends React.Component {
  state = {
    selected: 0,
  };


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
    let Img=frontRightImg;
    switch (this.state.selected){
      case 1:
        Img = tilt1;
        break;
      case 2:
        Img = tilt2;
        break;
      case 3:
        Img = rear;
        break;
      case 4:
        Img = frontRightImg;
        break;
      case 5:
        Img = tilt1;
        break;
      default:
        break;
    }
    return (
      <div className="sceneContainer">
        <img src={Img} />
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
