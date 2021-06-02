import React,{useState} from 'react';
import "./Explore.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import tiltImg from "../../assets/tilt.svg";
import slideImg from "../../assets/slide.svg";
import portsImg from "../../assets/Zoom.png";


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
    const list = props.map((item) => (
      <div
        className="dropdown__item"
        key={item[0]}>
        <img src={item[1]} />
        <p>{item[0]}</p>
      </div>
    ));

    return (
      <div className="dropdown__items"> { list } </div>
    )
  }
}



export default Dropdown;
