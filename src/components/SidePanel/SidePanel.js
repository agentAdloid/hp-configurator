import React from "react";
import "./SidePanel.css";
import logo from "../../assets/logo192.png";
import Features from "../../components/Features/Features";
import Explore from "../../components/Explore/Explore";
import Aux from "../../hoc/Aux";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class SidePanel extends React.Component {
  state={
    show: true
  }
  render() {
    let Icon = (
      <ArrowBackIosIcon className="arrow"/>
    );
    if(!this.state.show)
    { Icon = (<ArrowForwardIosIcon className="arrow"/>);
    }
    let classname = "sidePanel";
    if(!this.state.show)
        classname = classname+" sidePanelHide";
    return (
      <Aux>
      <div className={classname} >
        <div className="tag">
          <img alt="" src={logo} />
          <p>OMEN 27i Gaming Monitor</p>
        </div>
        <div className="lowerSidePanel">
          <Explore slide={this.props.slide} showPorts={this.props.showPorts} tilt={this.props.tilt}/>
          <Features showGsyncTech={this.props.showGsyncTech}/>
        </div>
      </div>
      <div className="sidePanelToggler" onClick={()=>{
        this.setState({show: !this.state.show});
    }}>
      {Icon}
    </div>
    </Aux>
    );
  }
}
export default SidePanel;
