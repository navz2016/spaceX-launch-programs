import React from 'react';

const Header = () => {
    const _styles = {
        "fontSize": "28px",
        "textAlign": "left",
        "padding": "10px"
    };

    return(
        <React.Fragment>
            <header style={_styles}>
                <b>SpaceX Launch Programs</b>
            </header>
        </React.Fragment>
    )
}

export default Header;