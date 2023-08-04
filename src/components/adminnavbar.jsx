import { Component } from "react";
import { MenuItems } from "./adminnavbaritems";
import { Link } from 'react-router-dom';
import "./navbar.css";
import React from 'react'


class AdminNavbar extends Component {

    

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (

            <nav className="NavbarItems">
                <h1 className="navbar-logo">Makeyourtrip</h1>
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

export default AdminNavbar;