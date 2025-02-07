import React from "react";

import "./Card.scss";

const Card = ({ heading, description }) => {
    return (
        <div className="card">
            <div className="cardhead">{heading}</div>
            <div className="carddesc">{description}</div>
        </div>
    );
};

export default Card;
