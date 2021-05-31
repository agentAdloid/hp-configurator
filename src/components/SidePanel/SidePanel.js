import React from "react";
import "./SidePanel.css";
import logo from "../../assets/logo192.png";
import Features from "../../components/Features/Features";
import Explore from "../../components/Explore/Explore";
import Aux from "../../hoc/Aux";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SceneButtons from "../../components/SceneButtons/SceneButtons";
class SidePanel extends React.Component {
  state = {
    show: true,
  };
  render() {
    let Icon = <ArrowBackIosIcon className="arrow" />;
    if (!this.state.show) {
      Icon = <ArrowForwardIosIcon className="arrow" />;
    }
    let classname = "sidePanel";
    let tagClassname = "tag";
    let togglerClass = "sidePanelToggler";
    let sceneClass = "sceneButtons";
    if (!this.state.show) 
    {  classname = classname + " sidePanelHide";
       tagClassname = tagClassname + " sidePanelHide";
       togglerClass = togglerClass+ " togglerLeft"
       sceneClass = "sceneButtons-difn-pos";
    }
    return (
      <Aux>
        <div className={tagClassname} >
          <img alt="" src={logo} />
          <p>OMEN 27i Gaming Monitor</p>
        </div>
        <div className={classname}>
          <Explore
            slide={this.props.slide}
            showPorts={this.props.showPorts}
            tilt={this.props.tilt}
          />
          <Features showGsyncTech={this.props.showGsyncTech} />
        </div>
        <div
          className={togglerClass}
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {Icon}
        </div>
        <SceneButtons
          className ={sceneClass}
          showFirstImg={this.props.showFirstImg}
          showSecondImg={this.props.showSceondImg}
          showThirdImg={this.props.showThirdImg}
          showFourthImg={this.props.showFourthImg}
          showFifthImg={this.props.showFifthImg}
        />
      </Aux>
    );
  }
}
export default SidePanel;
