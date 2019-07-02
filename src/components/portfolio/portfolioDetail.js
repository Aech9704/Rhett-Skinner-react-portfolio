import React from "react";

export default function(props) {
    return(
        <div>
            <h2>Portfolio Deatails for {props.match.params.slug}</h2>
        </div>
    );
}