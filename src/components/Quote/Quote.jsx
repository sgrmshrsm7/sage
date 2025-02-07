import React from "react";
import "./Quote.scss";

const Quote = ({ quoteLine, quoteBy }) => {
    return (
        <div className="quote">
            <div className="quote_line">{quoteLine}</div>
            <div className="quote_by">- {quoteBy}</div>
        </div>
    );
};

export default Quote;
