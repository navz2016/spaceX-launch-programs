import React from 'react';

const Footer = () => {
    const _styles = {
        "fontSize": "18px",
        "textAlign": "center",
        "marginTop": "20px",
        "padding": "5px"
    };

    return(
        <footer style={_styles}>
            <b>Developed by: </b>{' '} Navjeet Singh
        </footer>
    )
}

export default Footer;