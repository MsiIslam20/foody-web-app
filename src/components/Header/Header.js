import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="" alt="" className="img-fluid logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="form-inline ml-auto my-2 my-lg-0">
                        <input className="form-control search-form mr-sm-2" type="search" placeholder="Search your Destination..." aria-label="Search" />
                    </div>                    
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#0">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Destination</a>
                            </li>     
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Blog</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Contact</a>
                            </li>  
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;