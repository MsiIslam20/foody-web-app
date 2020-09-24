import React from 'react';
import './Feature.css';

const SingleFeature = (props) => {
    const {title, description} = props.feature;
    return (
        <div className="col-md-4">
            <div className="feature-inner">
                <div class="card">
                    <img class="card-img-top" src="https://i.ibb.co/55HN8q5/fast-delivery.png" alt="" />
                    <div class="card-body">
                        <div class="d-flex">
                            <img class="mr-2" height="40px" src="https://i.ibb.co/1nz9kZH/bus.png" alt="" />
                            <div>
                                <h5>{title}</h5>
                                <p>{description}</p>
                                <span class="card-link collapse-btn">See More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFeature;