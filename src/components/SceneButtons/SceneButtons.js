import React from "react";
import "./SceneButtons.css";

class SceneButton extends React.Component {
  state={
    selected: 0
  }
  render() {
    let cl = ["", "", "", "", "", ""];
    switch (this.state.selected) {
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
      <div className={this.props.className}>
        <div
          className={"circleButton" + cl[1]}
          onClick={() => {
            this.setState({selected:1});
            this.props.showFirstImg();
          }}
        ></div>
        <div
          className={"circleButton" + cl[2]}
          onClick={() => {
            this.setState({selected:2});
            this.props.showSecondImg();
          }}
        ></div>
        <div
          className={"circleButton" + cl[3]}
          onClick={() => {
            this.setState({selected:3});
            this.props.showThirdImg();
          }}
        ></div>
        <div
          className={"circleButton" + cl[4]}
          onClick={() => {
            this.setState({selected:4});
            this.props.showFourthImg();
          }}
        ></div>
        <div
          className={"circleButton" + cl[5]}
          onClick={() => {
            this.setState({selected:5});
            this.props.showFifthImg();
          }}
        ></div>
      </div>
    );
  }
}

export default SceneButton;
