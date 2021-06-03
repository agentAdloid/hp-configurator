import React from "react";
import './Scroller.css';
class Scroller extends React.Component{

    render()
    {   return( 
        <div className="scroller">
            {this.props.children}
        </div>
    );
    }
}

export default Scroller;