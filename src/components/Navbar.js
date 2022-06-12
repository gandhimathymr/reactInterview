import React, { Component } from "react";
import config from '../Config';
import '../css/style.css';

const myStyle={
    backgroundImage: 
    "url('/Slices/nav_bar.png')",
    height: '192px',
    backgroundSize: 'cover',
    width:' 100%',
    top:'0',
    position: 'fixed',
    backgroundRepeat:'no-repeat'
};

class Navbar extends Component{

    render(){
        return(
            <div className="d-flex navbar" style={myStyle}>
                <div className="d-flex ">
                    <img 
                        className="iconClass ms-4"
                        src={config.PUBLIC_URL + "/Slices/Back.png"}
                    />
                    <h2 className="text-light ms-4">Romantic Comedy</h2>
                </div>
                <img 
                        className="iconClass ms-4"
                        src={config.PUBLIC_URL + "/Slices/search.png"}
                    />
            </div>
        )
    }

}
export default Navbar;