import React, { Component } from "react";
import ProgressiveImage from "react-progressive-image-loading";
import config from '../Config';
import '../css/style.css';

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            name: null,
            lazyloader: false,
        }
    }
    render(){
        // console.log(this.props);
        return(
            <div className="col-lg-4 col-4">
                <img className="imageClass"
                    src={config.PUBLIC_URL + "/Slices/"+this.props.images}
                    placeholder={config.PUBLIC_URL + "/Slices/placeholder_for_missing_posters.png"}
                />
                <div className="text-start">
                    <h3 className="cardtitle">{this.props.name}</h3>
                </div>
            </div>
        )
    }

}

export default Card;