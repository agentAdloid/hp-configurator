import React from "react";
import "./SidePanel.css";
import Features from "../../components/Features/Features";
import Explore from "../../components/Explore/Explore";
import Aux from "../../hoc/Aux";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SceneButtons from "../../components/SceneButtons/SceneButtons";
import { CSSTransition } from "react-transition-group";
import rightImg from "../../assets/EXTED_PATCH_0.png";
import leftImg from "../../assets/EXTED_PATCH_01.png";
import Gradient from "../../assets/GRADIANT.png";
import shareImg from "../../assets/share.svg";
import reSize from "../../assets/RESIZE_OFF.svg";
import reSet from "../../assets/reset.png";
import logo from "../../assets/logo.svg";
import PATCH from "../../assets/PATCH.svg";
import downArrow from "../../assets/downarrow.svg";
import upArrow from "../../assets/uparrow.svg";
class SidePanel extends React.Component {
  state = {
    show: true,
    ExploreListShow: false,
    FeatureListShow: false,
    mobileView: false,
  };
  constructor(props) {
    super(props);
    if (window.innerWidth <= 699) this.state.mobileView = true;
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 699) this.setState({ mobileView: true });
      else this.setState({ mobileView: false });
    });
  }
  createMobileView = () => {
    let Icon = <ArrowBackIosIcon className="arrow" />;
    if (!this.state.show) {
      Icon = <ArrowForwardIosIcon className="arrow" />;
    }
    let togglerClass = "sidePanelToggler";
    let sceneClass = "sceneButtonsContainer";
    let imgArrow = downArrow;
    let info = "info-div";
    let patchClass = "patchContainer";
    if (!this.state.show) {
      togglerClass = togglerClass + " togglerLeft";
      sceneClass = "sceneButtons-difn-pos";
      imgArrow = upArrow;
      info = "info-div-low";
      patchClass = "patchContainerDifn";
    }

    return (
      <Aux>
        <img alt="" src={logo} className="logo-gl" />
        <CSSTransition in={this.state.show} timeout={2000} classNames="alert">
          <div className={info}>
            <div className="internal">
              <SceneButtons
                className="sceneButtons"
                showFirstImg={this.props.showFirstImg}
                showSecondImg={this.props.showSceondImg}
                showThirdImg={this.props.showThirdImg}
                showFourthImg={this.props.showFourthImg}
                showFifthImg={this.props.showFifthImg}
              />
              <img
                src={imgArrow}
                className="sidePanelToggler"
                onClick={() => {
                  this.setState({ show: !this.state.show });
                }}
              />
            </div>
            <div className="sidePanel">
              <p className="tag-p">OMEN 27i Gaming Monitor</p>

              <img src={Gradient} className="gradient" />
              <Explore
                slide={this.props.slide}
                showPorts={this.props.showPorts}
                tilt={this.props.tilt}
                showList={this.state.ExploreListShow}
                toggleList={() => {
                  this.setState({
                    ExploreListShow: !this.state.ExploreListShow,
                    FeatureListShow: false,
                  });
                }}
              />
              <Features
                showGsyncTech={this.props.showGsyncTech}
                exploreOpen={this.state.ExploreListShow}
                showList={this.state.FeatureListShow}
                toggleList={() => {
                  this.setState({
                    FeatureListShow: !this.state.FeatureListShow,
                    ExploreListShow: false,
                  });
                }}
              />
            </div>
          </div>
        </CSSTransition>
        <div className="share-div">
          <img src={reSet} className="share" />
          <img src={shareImg} className="share" />
          <img src={reSize} className="share" />
        </div>
      </Aux>
    );
  };
  render() {
    let mobileView = this.createMobileView();
    console.log("mob:" + this.state.mobileView);
    let Icon = <ArrowBackIosIcon className="arrow" />;
    if (!this.state.show) {
      Icon = <ArrowForwardIosIcon className="arrow" />;
    }
    let togglerClass = "sidePanelToggler";
    let sceneClass = "sceneButtonsContainer";
    let imgArrow = rightImg;
    if (!this.state.show) {
      togglerClass = togglerClass + " togglerLeft";
      sceneClass = "sceneButtons-difn-pos";
      imgArrow = leftImg;
    }

    return this.state.mobileView ? (
      mobileView
    ) : (
      <Aux>
        <img alt="" src={logo} className="logo-gl" />
        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames="alert"
          unmountOnExit
        >
          <Aux>
            <div className="tagContainer">
              <div className="tag">
                <p>OMEN 27i Gaming Monitor</p>
              </div>
              <img alt="" src={logo} className="logo" />
            </div>
          </Aux>
        </CSSTransition>

        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames="alert"
          unmountOnExit
        >
          <div className="sidePanel">
            <img src={Gradient} className="gradient" />
            <Explore
              slide={this.props.slide}
              showPorts={this.props.showPorts}
              tilt={this.props.tilt}
              showList={this.state.ExploreListShow}
              toggleList={() => {
                this.setState({
                  ExploreListShow: !this.state.ExploreListShow,
                  FeatureListShow: false,
                });
              }}
            />
            <Features
              showGsyncTech={this.props.showGsyncTech}
              exploreOpen={this.state.ExploreListShow}
              showList={this.state.FeatureListShow}
              toggleList={() => {
                this.setState({
                  FeatureListShow: !this.state.FeatureListShow,
                  ExploreListShow: false,
                });
              }}
            />
          </div>
        </CSSTransition>

        <CSSTransition in={this.state.show} timeout={2000} classNames="toggler">
          <img
            src={imgArrow}
            className={togglerClass}
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          />
        </CSSTransition>
        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames="sceneButtons"
        >
          <SceneButtons
            className={sceneClass}
            showFirstImg={this.props.showFirstImg}
            showSecondImg={this.props.showSceondImg}
            showThirdImg={this.props.showThirdImg}
            showFourthImg={this.props.showFourthImg}
            showFifthImg={this.props.showFifthImg}
          />
        </CSSTransition>
        <div className="share-div">
          <img src={reSet} className="share" />
          <img src={shareImg} className="share" />
          <img src={reSize} className="share" />
        </div>
      </Aux>
    );
  }
}
export default SidePanel;
