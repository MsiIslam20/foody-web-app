import React, { useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import foodData from '../../fakedata/foodData'
import FoodItem from '../FoodItem/FoodItem';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState(foodData);
    const [selectFood, setSelectFood] = useState("lunch");

    const getFood = foods.filter(food => food.catagories === selectFood);

    return (
        <div className="container foods-container">
            <div className="col-md-12">
                <ul className="list-unstyled text-center">
                    <li onClick={() => setSelectFood("breakfast")}><span className={selectFood === "breakfast" ?  "active" : ""}>Breakfast</span></li>
                    <li onClick={() => setSelectFood("lunch")}><span className={selectFood === "lunch" ?  "active" : ""}>Lunch</span></li>
                    <li onClick={() => setSelectFood("dinner")}><span className={selectFood === "dinner" ?  "active" : ""}>Dinner</span></li>
                </ul>
                <div className="row my-5">
                    {
                        getFood.map(food => <FoodItem food={food} key={food.id}></FoodItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;