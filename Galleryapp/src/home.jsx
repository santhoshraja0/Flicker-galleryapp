import React, { Component } from 'react';
import PropTypes from "prop-types";

const HomePage = ({searchCallback}) => {

    const valueUpdate = (event) => {
        searchCallback(event.target.value)
    }


    return (  
        <React.Fragment>
            <h1>Gallery App</h1>
            <label htmlFor ="search">Pictures to search</label>
            <input  onChange={valueUpdate} type="text" name ="search" placeholder="Search.."></input>
        </React.Fragment>

    );
}
 
export default HomePage;

HomePage.propType={
    searchCallback: PropTypes.func
}

HomePage.defaultProps= {
    searchCallback : () => {}
}


