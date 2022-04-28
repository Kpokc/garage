import React from "react";

import './topGarageInfo.css'

function TopGarageInfo() {
    return (

        <div className="row">
            <div className="col-lg-10 d-lg-block d-none text-front">
                <div className="btn">
                    <a className="addressLink" href="https://goo.gl/maps/1hBTrEVzqYP2" rel="noopener noreferrer" target="_blank">Unit 9, Liosban Industrial Estate, Tuam Road, Galway</a>
                </div>
                <div className="btn">
                    <span>+353 85 208 55 59</span>
                </div>
                <div className="btn">
                    <span>info@atomicgarage.ie</span>
                </div>
            </div>
            <div className="col-2 d-lg-block d-none text-end">
                <div className="btn">
                    Facesbook
                </div>
            </div>
        </div>
    )
}

export default TopGarageInfo;