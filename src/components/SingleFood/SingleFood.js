import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import foodData from '../../fakedata/foodData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SingleFood.css'

const SingleFood = () => {
    const {id} = useParams();
    const product = foodData.filter(place => place.id === parseInt(id));
    const {title, description, price, img} = product[0];


    let history = useHistory();
    const handleClick = () => {
        
    }

    return (
        <div className="container single-food-home">
            <div className="row">
                <div className="col-md-6">
                    <div className="food-details">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className="d-flex">
                            <h2>${price}</h2>
                            <div className="cart-controller btn ml-3">
                                <button className="btn">-</button>
                                1
                                <button className="btn">+</button>
                            </div>
                        </div>
                        <button onClick={handleClick} className="add-btn btn btn-danger btn-rounded"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={img} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;