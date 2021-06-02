import React, { useState } from "react";
import "./Features.css";
import Aux from "../../hoc/Aux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import tiltImg from "../../assets/tilt.svg";
import slideImg from "../../assets/slide.svg";
import portsImg from "../../assets/Zoom.png";
import plusCircle from "../../assets/PLUS_WITH_CIRCLE_ICON.svg";
import minusCircle from "../../assets/MINUS_WITH_CIRCLE_ICON.svg";

const race = [
  "NVIDIA G-SYNC Technology",
  "1440p Resolution",
  "Nano Ips Panel Technology",
];
const para =
  "Get in the game with the latest NVIDIA® G-SYNC® Compatible displays. Each displays is validated by NVIDIA to bring you smooth, variable refresh rate (VRR) gaming experience that eliminates tearing, stuttering, artifacts, and flicker at refresh rate up to 165Hz. So you get the competitive edge you need, backed by performance you can trust.";
class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const isOpen = this.props.showList;
    let icon = <AddIcon className="plusIcon" />;
    if (isOpen) {
      icon = <RemoveIcon className="plusIcon" />;
    }
    return (
      <div className={isOpen ? "exploreContainer active" : "exploreContainer"}>
        <div className="exploreTag" onClick={this.props.toggleList}>
          {icon}
          <p>Feature</p>
        </div>
        {this.itemList(this.state.isOpen)}
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  itemList = (props) => {
    let paraClass = "subFeatureContainer";
    let circleImg = plusCircle;
    if (this.state.isOpen) 
      { paraClass += " opensubFeature";
        circleImg = minusCircle;
      }
    const list = (
      <Aux>
        <div className="dropdown__item_features" key={race[0]}>
          <img src={circleImg} />
          <p
            onClick={() => {
              this.setState({ isOpen: !this.state.isOpen });
            }}
          >
            {race[0]}
          </p>
          <div className={paraClass}>
            <p>{para}</p>
          </div>
        </div>
      </Aux>
    );

    return <div className="dropdown__items_features"> {list} </div>;
  };
}

export default Dropdown;
