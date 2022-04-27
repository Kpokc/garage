import React from "react";

import './navBar.css'

function NavBar() {
    return (
        <div className="row">
                {/* Top Menu */}
                {/* col-lg-12 col-md-9 */}
                    <nav className="bg-primary navbar navbar-expand-lg navbar-light shadow-sm">
                        <div className="container">
                            <a className="navbar-brand fw-bold" href="#page-top">Atomic Garage</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Our Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        {/* Burger menu */}
                        <div className="burger d-lg-none">
                            <div id="webapp_cover" data-toggle="collapse" 
                                            data-target="#navbarSupportedContent" 
                                            aria-controls="navbarSupportedContent" 
                                            aria-expanded="false" 
                                            aria-label="Toggle navigation">
                                <div id="menu_button">
                                    <input type="checkbox" id="menu_checkbox" />
                                    <label for="menu_checkbox" id="menu_label">
                                    <div id="menu_text_bar"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </nav>
                {/* Burger menu */}
                {/* col-3 d-lg-none col-md-3 */}
                {/* <div className="burger">
                    <div id="webapp_cover" data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation">
                        <div id="menu_button">
                            <input type="checkbox" id="menu_checkbox" />
                            <label for="menu_checkbox" id="menu_label">
                            <div id="menu_text_bar"></div>
                            </label>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default NavBar;