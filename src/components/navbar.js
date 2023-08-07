import { Component } from "react";
import { MenuItems } from "./menuitems";
import { Link } from 'react-router-dom';
import "./navbar.css";
import React from 'react'
import logo from "../assests/name.png"


class Navbar extends Component {

    

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (

            <nav className="NavbarItems">
                <div className="logoandname">
                <img className="logoimage"src={logo}    alt="logo image"/>
                {/* <h1 className="navbar-logo">Makeyourtrip</h1> */}
                </div>
               




                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>
                <ul className={this.state.clicked ? " nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>

                                    {item.title}
                                </Link>

                            </li>

                        );
                    })}

                    <Link to="/register">
                        <button>Sign Up</button>
                    </Link>

                </ul>

            </nav>
        )
    }
}

export default Navbar;