import React from "react";
import "./SceneButtons.css";

class SceneButton extends React.Component {
  render() {
    let cl = ["", "", "", "", "", ""];
    switch (this.props.selected) {
      case 1:
        cl[1] = "Selected";
        break;
      case 2:
        cl[2] = "Selected";
        break;
      case 3:
        cl[3] = "Selected";
        break;
      case 4:
        cl[4] = "Selected";
        break;
      case 5:
        cl[5] = "Selected";
        break;
      default:
        break;
    }
    return (
      <div className="sceneButtons">
        <div
          className={"circleButton" + cl[1]}
          onClick={() => {
            this.props.first();
          }}
        ></div>
        <div
          className={"circleButton" + cl[2]}
          onClick={() => {
            this.props.second();
          }}
        ></div>
        <div
          className={"circleButton" + cl[3]}
          onClick={() => {
            this.props.third();
          }}
        ></div>
        <div
          className={"circleButton" + cl[4]}
          onClick={() => {
            this.props.fourth();
          }}
        ></div>
        <div
          className={"circleButton" + cl[5]}
          onClick={() => {
            this.props.fifth();
          }}
        ></div>
      </div>
    );
  }
}

export default SceneButton;
