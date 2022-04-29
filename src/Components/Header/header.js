import React from "react";

import './header.css'

function Header() {
    return (
        // <header className="container bg-secondary px-5">
            <header className="row align-items-center bg-secondary px-5">
                {/* Welcom text left box */}
                <div className="col-lg-6">
                    <div className="mb-5 mb-lg-0 text-center text-lg-start">
                        <h1 className="display-1 lh-1 mb-3">Here Welcome text</h1>
                        <p className="lead fw-normal text-muted mb-5">
                            Our targets here
                        </p>
                        {/* Buttons to switch between vehicles */}
                        <div className="d-flex flex-column flex-lg-row align-items-center">
                            <a className="me-lg-3 mb-4 mb-lg-0">
                                Motorbikes
                            </a>
                            <a className="me-lg-3 mb-4 mb-lg-0">
                                Cars
                            </a>
                            <a className="me-lg-3 mb-4 mb-lg-0">
                                Comercial
                            </a>
                        </div>
                    </div>
                </div>
                {/* 3D box */}
                <div className="col-6">
                    <div className="mb-5 mb-lg-0 text-center text-lg-start box3d">
                        3D Picture
                    </div>
                </div>
            </header>
        // </header>
    )
}

export default Header;