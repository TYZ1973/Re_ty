import { useState } from 'react';
import './App.css';
import Meals from './component/Meals/Meals';
// import B from './component/B';
// import TestContext from './component/store/testContext';
import cardContext from './component/store/cardContext';
import FilterMeals from './component/FilterMeals/FilterMeals';
import Cart from './component/Cart/Cart';
import Comfirm from './component/UI/Comfirm/Comfirm';
const MEALS_DATA=[

  {
    id:'1',
    title:'aaa',
    desc:'xxxxxxxxxxxxxxxxxx3123111xxxxx11',
    price:12,
    img:'/img/Meals/1.png'

  },
  {
    id:'2',
    title:'bbb',
    desc:'xxxxxxxxxxxxxxxxxxxx21312x111xx22',
    price:12,
    img:'/img/Meals/2.png'

  },
  {
    id:'3',
    title:'ccc',
    desc:'xxxxxxxxxxxxxxxxxxx321312x111xxx33',
    price:12,
    img:'/img/Meals/3.png'

  },
  {
    id:'4',
    title:'ddd',
    desc:'xxxxxxxxxxxxxxxxxx321321xx111xxx44',
    price:12,
    img:'/img/Meals/3.png'

  },
  {
    id:'5',
    title:'eee',
    desc:'xxxxxxxxxxxxxxxxxxx21312x111xxx55',
    price:12,
    img:'/img/Meals/3.png'

  }

]








function App() {

  const [mealsData, setMealsData]= useState(MEALS_DATA);
  const [cartData , setCartData]=useState({
      items:[],
      totalAmount:0,
      totalPrice:0
  });

  const filterHandler = (keyword)=>{

    // if(keyword !==)
    
    const newMealData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1);
    setMealsData(newMealData)
  }


  const addMealHandler = (meal) =>{

        const newCart = {...cartData};
        if(newCart.items.indexOf(meal)=== -1){
          newCart.items.push(meal);
           meal.amount = 1;
        }else{
          meal.amount += 1
        }
       
        newCart.totalAmount +=1;
        newCart.totalPrice +=meal.price;

        setCartData(newCart);

  };

  const subMealHandler = (meal) =>{

    const newCart = {...cartData};
    meal.amount -= 1
    
    if(meal.amount === 0){

      newCart.items.splice(newCart.items.indexOf(meal),1)

    }
   
    newCart.totalAmount -=1;
    newCart.totalPrice -=meal.price;

    setCartData(newCart);

};

 const clearCart =()=>{

    const newCart ={...cartData}
    newCart.items.forEach(item=> delete item.amount);
    newCart.items=[];
    newCart.totalAmount=0;
    newCart.totalPrice=0;
    setCartData(newCart);
 }

  return (


    

    <cardContext.Provider value={{...cartData,addMealHandler,subMealHandler,clearCart}}>
      
    <div className="App">

    
      <FilterMeals onFilter = {filterHandler} />
     <Meals mealsData={mealsData}
     
    //  onAdd={addMealHandler}
    //  onSub = {subMealHandler}
     />
     <Cart/>
   

    </div>

    </cardContext.Provider>

  );
};

export default App;
