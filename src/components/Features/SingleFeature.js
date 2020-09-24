import React from 'react';
import './Feature.css';

const SingleFeature = (props) => {
    const {title, description, icon, img} = props.feature;
    return (
        <div className="col-md-4">
            <div className="feature-inner">
                <div className="card">
                    <img className="card-img-top" src={img} alt="" />
                    <div className="card-body">
                        <div className="d-flex">
                            <img className="mr-2" height="40px" src={icon} alt="" />
                            <div>
                                <h5>{title}</h5>
                                <p>{description}</p>
                                <span className="card-link collapse-btn">See More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFeature;