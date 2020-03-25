import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <div className="nav-bar">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="experience">Experience</NavLink>
                    <NavLink to="work">Work</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
            </nav>
         );
    }
}

export default Navigation;
