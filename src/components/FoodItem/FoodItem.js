import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './FoodItem.css'

const FoodItem = (props) => {
    console.log(props);
    const {title, subtitle, price, img} = props.food;
    return (
        <div className="col-md-4 mb-5">
            <div className="food-item">
                <div class="card text-center">
                    <img src={img} alt="" class="card-img-top" />
                    <div class="card-body">
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