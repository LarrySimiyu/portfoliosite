import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import '../styles/App.css'

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <div className="nav-wrapper">
                    <NavLink className="navigationLink" to="/">About</NavLink>
                    <NavLink className="navigationLink" to="/experience">Experience</NavLink>
                    <NavLink className="navigationLink" to="/work">Work</NavLink>
                    <NavLink className="navigationLink" to="/contact">Contact</NavLink>
                </div>
            </nav>
         );
    }
}

export default withRouter(Navigation);
