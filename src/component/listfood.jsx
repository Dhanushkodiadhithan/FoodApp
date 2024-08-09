import React from 'react';
import './listfood.css'

const Listfood = ({setstatus,setfoodselect,foods}) => {
    function handleit(food){
        setfoodselect(food)
        setstatus(1)
    }
    return (
        <><h1>CHOOSE YOUR FAV FOOD :</h1>
            <div className="list">
            {foods.map((food)=>{
                        return(
                            <div key={food.name}> 
                                <img src={food.img} alt="" onClick={()=>handleit(food)}/>
                                <h2>{food.name}</h2>
                            </div>
                        )
                    })}
            </div>
        </>
    );
}

export default Listfood;
