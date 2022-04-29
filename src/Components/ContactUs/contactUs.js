import React from "react";

import './contactUs.css'

function ContactUs() {
    return (
        <div id="contactUs">
            <section className="row bg-alert text-center py-5">
                <h2>Contact Us</h2>
                <div className="col-6 px-5">
                    <div className="google-map-code">
                        Google map
                    </div>
                </div>
                    <div className="col-6 px-5">
                        Contact Us Form
                    </div>
            </section>
        </div>
    );
};

export default ContactUs;