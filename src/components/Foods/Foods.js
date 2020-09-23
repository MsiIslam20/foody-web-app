import React, { useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import foodData from '../../fakedata/foodData'
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState(foodData);
    console.log(foods);
    return (
        <div>
            <h1>
                food
            </h1>
        </div>
    );
};

export default Foods;