import React, { Component } from "react";

import './navBar.css'

export default class NavBar extends Component {

    state = {
        menuOpen: false,
        navToShow: false,
        links: [
            {id: 1, link: 'Home', ref: '#home', clickFunc: this.clickOnBurgerLink},
            {id: 2, link: 'Services', ref: '#services', clickFunc: this.clickOnBurgerLink},
            {id: 3, link: 'About Us', ref: '#aboutUs', clickFunc: this.clickOnBurgerLink},
            {id: 4, link: 'Our Team', ref: '#ourTeam', clickFunc: this.clickOnBurgerLink},
            {id: 5, link: 'Contact Us', ref: '#contactUs', clickFunc: this.clickOnBurgerLink},
        ]
    };

    clickOnMenuBtn = () => {
        this.setState({
            menuOpen: !this.state.menuOpen,
            navToShow: !this.state.navToShow
        });
        // Add/remove Scrollbar and Scrollbar functionality
        // if (!this.state.menuOpen) {
        //     document.body.classList.add('removeScrollBar');
        // } else {
        //     document.body.classList.remove('removeScrollBar');
        // }
    };

    clickOnBurgerLink = () => {
        console.log(333333333)
        this.setState({
            menuOpen: false,
            navToShow: false
        });
        // Add/remove Scrollbar and Scrollbar functionality
        // if (!this.state.menuOpen) {
        //     document.body.classList.add('removeScrollBar');
        // } else {
        //     document.body.classList.remove('removeScrollBar');
        // }
    };

    render() {

        // List of links
        const links = this.state.links
        const linksList = links.map((el) => {
            const { id, ref, link, clickFunc } = el;
            return (
                <li className="nav-item active" key={id}>
                    <a className="nav-link" href={ref} onClick={clickFunc}>{link}</a>
                </li>
            );
        });

        return (
            <div className="row">
                {/* Top Menu */}
                <nav className="bg-primary navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <a className="navbar-brand fw-bold" href="#page-top">Atomic Garage</a>
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
                                {/* <!-- I don't care about the menu elements here so I will hide them--> */}
                                <ul className={this.state.navToShow ? "ulNavToShow" : "ulNavToHide"}>
                                    {linksList}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>
        )
    };
}