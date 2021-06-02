import React,{useState} from 'react';
import "./Explore.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import tiltImg from "../../assets/tilt.svg";
import slideImg from "../../assets/slide.svg";
import portsImg from "../../assets/Zoom.png";
import Aux from "../../hoc/Aux";

const race = [['Slide',slideImg],['Tilt',tiltImg],['Ports',portsImg]];

class Dropdown extends React.Component {

  render() {
    const isOpen = this.props.showList;
    let icon = (<AddIcon className="plusIcon"/>);
    if(isOpen)
    {   icon =(<RemoveIcon className="plusIcon"/>);
    }
    return (
      <div
        className={isOpen ? "exploreContainer active" : "exploreContainer"}
       >
        <div className="exploreTag"  onClick={this.props.toggleList} >
            {icon}
            <p>Explore</p>
        </div>
        {this.itemList(race)}
      </div>
    )
  }

  itemList = props => {
    const list = (
      <Aux>
      <div
        className="dropdown__item"
        key={race[0][0]}>
        <img src={race[0][1]} />
        <p onClick={this.props.slide}>{race[0][0]}</p>
      </div>
      <div
        className="dropdown__item"
        key={race[1][0]}>
        <img src={race[1][1]} />
        <p onClick={this.props.tilt}>{race[1][0]}</p>
      </div>
      <div
        className="dropdown__item"
        key={race[2][0]}>
        <img src={race[2][1]} />
        <p onClick={this.props.showPorts}>{race[2][0]}</p>
      </div>
      </Aux>
    );

    return (
      <div className="dropdown__items"> { list } </div>
    )
  }
}



export default Dropdown;
