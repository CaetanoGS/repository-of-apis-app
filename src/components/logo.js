import React from 'react';
import logo from '../assets/images/logo.png'
import '../assets/css/logo.css'

function Logo(){
    return (
        <div>
            <img src={logo} alt="" id="logo"/>
        </div>
    );
}

export default Logo;
