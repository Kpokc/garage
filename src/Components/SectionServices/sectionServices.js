import React from "react";

import './sectionServices.css'
import serviceImage from './img/images.jpg'

function SectionServices() {
    return (
        <section id="services">
            <div className="row gx-5 align-items-center">
                {/* Services garage provides */}
                <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                    <h2>Services</h2>
                </div>
                {/* Repair Service image */}
                <div className="col-lg-4 order-lg-0">
                    <img src={serviceImage} alt="Service_Image" />
                    <h2>Services Picture</h2>
                </div>
            </div>
        </section>
    )
}

export default SectionServices;