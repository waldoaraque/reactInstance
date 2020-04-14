import React, { Component, Fragment } from 'react';
const Header = (props) => {
    
    return(
        <Fragment>
            <h1>Hello World</h1>
            <p> {props.titulo} </p>
        </Fragment>
    )
}

export default Header;