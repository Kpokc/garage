import React, { Component } from "react";

import './navBar.css'


export default class NavBar extends Component {

    state = {
        menuOpen: false,
        navToShow: false,
        links: [
            {id: 1, link: 'Home', ref: '#home'},
            {id: 2, link: 'Services', ref: '#services'},
            {id: 3, link: 'About Us', ref: '#aboutUs'},
            // {id: 4, link: 'Our Team', ref: '#ourTeam'},
            {id: 4, link: 'Contact Us', ref: '#contactUs'},
        ]
    };

    // Open / close burger menu (Burger button)
    clickOnMenuBtn = () => {
        this.setState({
            menuOpen: !this.state.menuOpen,
            navToShow: !this.state.navToShow
        });
    };

    // Close burger menu (Menu and Burger menu links)
    clickOnMenuLink = () => {
        this.setState({
            menuOpen: false,
            navToShow: false
        });
    };

    render() {

        // List of menu links
        const links = this.state.links
        const linksList = links.map((el) => {
            const { id, ref, link, clickFunc } = el;
            return (
                <li className="nav-item active" key={id}>
                    <a className="nav-link" href={ref} onClick={this.clickOnMenuLink}>{link}</a>
                </li>
            );
        });

        return (
            <div className="row" id="navbar">
                {/* Top Menu */}
                <nav className="bg-primary navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <a className="navbar-brand fw-bold" href="#page-top">Atomic Garage</a>
                        <i className="fa-brands fa-facebook-square d-lg-none"></i>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {linksList}
                        </ul>
                    </div>
                    {/* Burger menu */}
                    <div className="d-lg-none d-block">
                        <div className={this.state.menuOpen ? "menu active" : "menu"}>
                            <button className="nav-tgl"
                                id="menuButton"
                                type="button"
                                aria-label="toggle menu"
                                onClick={this.clickOnMenuBtn}>
                                {/* <!-- this span just for the three dividers in the hamburger button--> */}
                                <span aria-hidden="true"></span>
                            </button>
                            <nav className="nav">
                                <ul className={this.state.navToShow ? "ulNavToShow" : "ulNavToHide"}>
                                    {/* Menu list */}
                                    {linksList}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };
};