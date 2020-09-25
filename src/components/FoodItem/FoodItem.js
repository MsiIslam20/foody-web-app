import React from 'react';
import { useHistory } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './FoodItem.css'

const FoodItem = (props) => {
    const {title, subtitle, price, img, id} = props.food;

    let history = useHistory();
    const handleClick = (props) => {
        history.push(`/food/${props}`)
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="food-item">
                <div className="card text-center" onClick={() => handleClick(id)}>
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5>{title}</h5>
                        <p>{subtitle}</p>
                        <h4>${price}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;