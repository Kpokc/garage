import React, { Component} from "react";

import './footer.css'


export default class Footer extends Component {

    render () {
        return (
            <footer className="row bg-black text-center py-5">
                <div className="col px-5">
                    <div className="text-white-50 small">
                        <div className="mb-2">
                            © Atomic Garage 2022. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
};