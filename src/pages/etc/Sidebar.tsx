import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Sidebar.Default.css"
import "../../styles/Sidebar.Projects.css"


const Sidebar: React.FC = () => {
    return (
        <nav className="sidebar">
            <ul>
                <div className="default-list">
                    <h1>Start</h1>
                    <li><NavLink to="/" exact activeClassName="active">Hem</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">Om mig</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Kontakta mig</NavLink></li>
                </div>
            <br />

            <h1>Mina projekt:</h1>
                <div className="project-list">
                    <li><NavLink to="/projects/ChemCalc" activeClassName="active">ChemCalc</NavLink></li>
                    <li><NavLink to="/projects/KallCord" activeClassName="active">KallCord</NavLink></li>
                </div>
           </ul>
        </nav>
    );
};

export default Sidebar;