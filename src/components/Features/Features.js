import React from "react";
import "./Features.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { CSSTransition } from "react-transition-group";
class Features extends React.Component {
  state={
    listShow:false
  }
  shouldComponentUpdate(nextProps, nextState){  
      if(this.props===nextProps && this.state===nextState)
      { return false;
      }
      return true;
  }
  render(){
  let Icon;
  if (this.state.listShow === false) {
    Icon = <AddIcon size="large" className="plusIcon" fontSize="large" />;
  } else
    Icon = <RemoveIcon size="large" className="plusIcon" fontSize="large" />;
  let Featurelist = (
    <div className="featuresList">
      <div className="listsTag" onClick={this.props.showGsyncTech}>
        <AddIcon fontSize="medium" className="minus" />
        <p>NVIDIA G-SYNC Technology</p>
      </div>
      <div className="listsTag" onClick={this.props.showGsyncTech}>
        <AddIcon fontSize="medium" className="minus" />
        <p>NVIDIA G-SYNC Technology</p>
      </div>
      <div className="listsTag" onClick={this.props.showGsyncTech}>
        <AddIcon fontSize="medium" className="minus" />
        <p>NVIDIA G-SYNC Technology</p>
      </div>
    </div>
  );
  if (this.state.listShow === false) {
    Featurelist = null;
  }
  return (
    <CSSTransition
      in={this.props.exploreOpen}
      timeout={2000}
      classNames="alertF"
    >
      <div className="featuresContainer">
        <div
          className="featuresTag"
          onClick={() => {
            this.setState({listShow:!this.state.listShow});
          }}
        >
          <div className="iconDiv">{Icon}</div>
          <p>Features</p>
        </div>
        {Featurelist}
      </div>
    </CSSTransition>
  );
        }
};

export default Features;
