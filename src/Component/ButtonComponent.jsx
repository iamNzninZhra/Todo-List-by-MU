/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";


const Btn = ({ backgroundColor, buttonlable, borderColor, onClick, completed }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        display: "flex",
        padding: "15px 20px 15px 20px",
        marginLeft: "20px",
        border: `1px solid ${borderColor}`,
        borderRadius: "10px",
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none",
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {buttonlable}
        </button>
    );
};

const DeleteButton = ({ onClick, borderColor, backgroundColor, buttonlable }) => (
    <button
        style={{
            backgroundColor: backgroundColor,
            color: "black",
            border: `1px solid ${borderColor}`,
            borderRadius: "5px",
            padding: "5px 10px",
            marginLeft: "10px",
            cursor: "pointer",
        }}
        onClick={onClick}
    >
        {buttonlable}
    </button>
);

export default Btn;