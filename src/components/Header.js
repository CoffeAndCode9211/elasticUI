import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark" style={{ overflowX: 'hidden' }}>
        <div className="">
            <div className="">
                <img className="companylogo" src="https://wisestep.com/assets/img/logos/wisestep.png" ></img>
                <div className="h3 comp-name text-light d-inline-block">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export { Header };