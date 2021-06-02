import React,{useState} from 'react';
import "./Explore.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import tiltImg from "../../assets/tilt.svg";
import slideImg from "../../assets/slide.svg";
import portsImg from "../../assets/Zoom.png";


const race = [['Slide',slideImg],['Tilt',tiltImg],['Ports',portsImg]];
const para = "Get in the game with the latest NVIDIA® G-SYNC® Compatible displays."+
+"Each displays is validated by NVIDIA to bring you smooth," 
+"variable refresh rate (VRR) gaming experience that eliminates" 
+"tearing, stuttering, artifacts, and flicker at refresh rate up" 
+"to 165Hz. So you get the competitive edge you need, backed by"
+"performance you can trust.";
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
        onClick={this.props.toggleList} >
        <div className="exploreTag">
            {icon}
            <p>Explore</p>
        </div>
        {this.itemList(race)}
      </div>
    )
  }

  itemList = props => {
    const list =(
      <div
        className="dropdown__item"
        key={race[0][0]}>
        <img src={race[1]} />
        <p>{item[0]}</p>
        <p>{para}</p>
      </div>
    ));

    return (
      <div className="dropdown__items"> { list } </div>
    )
  }
}



export default Dropdown;
