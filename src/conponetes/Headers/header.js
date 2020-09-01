import React from 'react';
import logo from '../../images/logo.png';
import './header.css'

const header = () => {
    return (
        <div class="header">
           <img src={logo} alt=""/>
           <nav>
               <a href="/shop">shop</a>
               <a href="/review">order Review</a>
               <a href="/Manage"> Manage invatory</a>
           </nav>
        </div>
    );
};

export default header;