import React from "react";

import './headerAside.css'

function HeaderAside() {
    return (
        <aside className="row text-center bg-info bg-gradient px-5 justify-content-center text-center">
            <div className="col-xl-8">
                <div className="h2 fs-1 text-black mb-4">
                    "An intuitive solution to a common problem that we all face, wrapped up in a single app!"
                </div>
                    <a className="navbar-brand fw-bold" href="#page-top">Atomic Garage</a>
            </div>
        </aside>
    )
}

export default HeaderAside;