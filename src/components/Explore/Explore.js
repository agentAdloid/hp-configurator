import React,{useState} from 'react';
import "./Explore.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'
const Features = (props) =>{
    const [listShow, setlistShow] = useState(false);
    let Icon;
    if(listShow===false)
    {   Icon = (<AddIcon size="large" className="plusIcon" fontSize="large"/>
        );
    }
    else
        Icon=(  <RemoveIcon size="large" className="plusIcon" fontSize="large"/>
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
    if(listShow===false)
    {   Featurelist = null;
    }
    return(
        <div className="exploreContainer" >
            <div className="exploreTag" onClick={()=>{
            setlistShow(!listShow);
        }}>     
                {Icon}
                <p>Explore</p>
            </div>
            { Featurelist}
        </div>
    )
}

export default Features;