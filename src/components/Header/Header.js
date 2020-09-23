import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="" className="img-fluid logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">                    
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#0">Log In</a>
                            </li>
                            <li className="nav-item">
                                <Link className="link-btn btn btn-danger btn-rounded" to="/signup">Sign Up</Link>
                            </li>     
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;