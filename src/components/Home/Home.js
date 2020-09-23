import React from 'react';
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Home.css'

const Home = () => {
    return (
        <div className="food-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="food-inner">
                            <h1>Best Food Waiting for your Belly</h1>
                            <div className="row">
                                <div className="col-md-6 mx-auto mt-4">
                                    <div className="search-box">
                                    <input id="query" type="text" className="form-control" placeholder="Search Food Item" />
                                    <Link to=" " >
                                        <button className="btn btn-danger search-btn btn-rounded">Search</button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;