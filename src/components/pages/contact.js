import React from "react";
import takaheImg from "../../../static/assets/images/about/big_bro.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return(
        <div className="side-by-side-wrapper">
            <div className="left-column"
            style={{
                backgroundImage: `url(${takaheImg})`
              }}
            />

            <div className="right-column">
                <div className="contact">
                    <div className="icon-wrapper">
                        <span className="icon"><FontAwesomeIcon icon="phone" /></span>
                        <span className="text-contact">555-555-555</span>
                    </div>

                    <div className="icon-wrapper">
                        <span className="icon"><FontAwesomeIcon icon="envelope" /></span>
                        <span className="text-contact">rjskinner1904@gmail.com</span>
                    </div>

                    <div className="icon-wrapper">
                        <span className="icon"><FontAwesomeIcon icon="map-marked-alt" /></span>
                        <span className="text-contact">North Ogden Ut</span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}