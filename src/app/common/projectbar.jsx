import { findByLabelText } from "@testing-library/react";
import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const wrapperStyles = {
        display: 'flex',
        justifyContent: 'center',
    }

    const containerStyles = {
        height: 25,
        width: '600px',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={wrapperStyles}>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};


export default ProgressBar;