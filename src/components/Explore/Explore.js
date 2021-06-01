import React,{useState} from 'react';
import "./Explore.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Features = (props) =>{
    let Icon;
    if(props.showList===false)
    {   Icon = (<AddIcon size="Small" className="plusIcon" fontSize="large"/>
        );
    }
    else
        Icon=(  <RemoveIcon size="Small" className="plusIcon" fontSize="large"/>
        );
    let Featurelist =(
        <div className="exploreList">
                <div className="listsTagExplore" onClick={props.slide}>
                    <p>Slide</p>
                </div>
                <div className="listsTagExplore" onClick={props.tilt}>
                    <p>Tilt</p>
                </div>
                <div className="listsTagExplore" onClick={props.showPorts}>
                    <p>Ports</p>
                </div>
            </div>
    ) ;
    if(props.showList===false)
    {   Featurelist = null;
    }
    return(
        <div className="exploreContainer" >
            <div className="exploreTag" onClick={props.toggleList}>     
                <div className="iconDiv">
                  {Icon}
                </div>
                <p>Explore</p>
            </div>
            { Featurelist}
        </div>
    )
}

export default Features;