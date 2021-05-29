import React from 'react';
import "./UIpanel.css";
import Aux from "../hoc/Aux";
import SceneComponent from "../components/SceneComponent/SceneComponent";
import SidePanel from "../components/SidePanel/SidePanel";
class UIpanel extends React.Component{

    slide = ()=>{
        this.refs.sceneComponent.slide();
    }
    tilt  =  ()=>{
        this.refs.sceneComponent.tilt();
    }
    showPorts = ()=>{
        this.refs.sceneComponent.showPorts();
    }
    showPorts = ()=>{
        this.refs.sceneComponent.showPorts();
    }
    showGsyncTech = ()=>{
        this.refs.sceneComponent.showGsyncTech();
    }
    render(){
        return(
            <Aux>
                <SidePanel slide={this.slide} tilt={this.tilt} showPorts={this.showPorts} showGsyncTech={this.showGsyncTech}/>
                <SceneComponent  ref="sceneComponent"/>
            </Aux>
        );
    }
}
export default UIpanel;