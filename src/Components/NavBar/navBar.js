import React from "react";

import './navBar.css'

function NavBar() {
    return (
        <div className="container">
            <div className="row">
                {/* Top Menu */}
                <div className="col col-lg-12 col-md-9">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
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
                    </nav>
                </div>
                {/* Burger menu */}
                <div className="col d-lg-none col-md-3">
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
            </div>
        </div>
    )
}

export default NavBar;