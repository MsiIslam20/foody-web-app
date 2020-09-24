import React, { useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import foodData from '../../fakedata/foodData'
import FoodItem from '../FoodItem/FoodItem';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState(foodData);
    return (
        <div className="container foods-container">
            <div className="col-md-12">
                <ul className="list-unstyled text-center">
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
                <div className="row my-5">
                    {
                        foods.map(food => <FoodItem food={food} key={food.id}></FoodItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;