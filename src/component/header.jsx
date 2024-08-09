import React ,{useState}from 'react';
import './header.css'
import Food from './food';
import Listfood from './listfood';

const Header = () => {

    const [status,setstatus] = useState(0);
    const [foodselect,setfoodselect] =useState(null)
    let foods =[{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZylLZLdEOnpA7xCFv_tEqFvcThCY70wK7Q&s",name:"Chicken"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ycQho5biF0TZLGOuDtp2jStnUNAqqzlXhg&s",name:"Dosa"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHrDuarN9j7U3Frop-7w-ndy7wfwLtE46Qw&s",name:"Spring Brunch"},{img:"https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg",name:"Chicken wings"},{img:"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=x_0,y_0,h_720,w_1280,c_fill/w_800",name:"Seafood paella"},{img:"https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg",name:"Burger"}];

    return (
       <>
        <div className='header'>
            <i class="fa-solid fa-bowl-food"></i>
            <span>FOOD APP</span>
        </div>

            <div className="choose">
                
    
                    {status === 0 ? <Listfood setfoodselect={setfoodselect} setstatus={setstatus} foods={foods}/> : <Food setstatus={setstatus} foodselect={foodselect}/>}
                
            </div>

        <div className='footer'>
            Thanks for visiting our website !!
        </div>
       </>
    );
}

export default Header;
