import React from 'react';
import './food.css'

const Food = ({foodselect,setstatus}) => {
    function handleback(){
        setstatus(0)
    }
    return (
        <>
            <div className='main'>
            <div className="left"><img src={foodselect.img} alt={foodselect.name} /></div>
            <div className="right">
                <h1>{foodselect.name}</h1>  <br/>
                <h3>INGREDIENTS:</h3><br />
                <h3>For the Chicken Wings:</h3><br />
                <ul>
                    <li>2 lbs (900 g) chicken wings</li>
                    <li>1 tablespoon vegetable oil</li>
                    <li>Salt and pepper to taste</li>
                </ul><br />
                <h3>For the Sweetly Sour Barbecue Sauce:</h3><br />
                <ul>
                    <li>1 cup barbecue sauce (store-bought or homemade)</li>
                    <li>1/4 cup honey</li>
                    <li>2 tablespoons apple cider vinegar</li>
                    <li>1 tablespoon soy sauce</li>
                    <li>1 tablespoon Dijon mustard</li>
                    <li>1 clove garlic, minced</li>
                    <li>1/2 teaspoon smoked paprika (optional, for extra flavor)</li>
                    <li>1/4 teaspoon cayenne pepper (optional, for a bit of heat)</li>

                </ul>
                <span className="btn" onClick={()=>handleback()}>GO BACK</span>
            </div>

        </div>
        </>
    );
}

export default Food;
