import React, { useState, useContext, useReducer, useEffect, Children } from 'react';
import Reducer_27 from './Reducer_27';

import cartItems from './data';

// const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext_27 = React.createContext();

// const initialState = {
//   loading: false,
//   cart: [],
//   amount: 4,
//   total: 123.45
// }

const AppProvider_27 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_27, {
    loading: false,
    cart: cartItems, // 使用导入的数据作为初始购物车数据
    amount: 4,
    total: 123.45,
  });

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'});
  },[state.cart] )
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });  
  }
  

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id});

  }

  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id});

  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });  
  }

  

  const fetchData = () => {
    dispatch({ type: 'LOADING' });
    const cart = cartItems; // 直接使用导入的数据
    console.log('cartItems', cartItems);
    dispatch({ type: 'DISPLAY_ITEMS', payload: cartItems });
  }
  


  // const fetchData = async () => {
  //   dispatch({ type: 'LOADING'});
  //   const response = await fetch(cartItems);
  //   const cart = await response.json();
  //   console.log('cart',cart);
  //   dispatch( { type: 'DISPLAY_ITEMS', payload: cart});
  // }

  useEffect(()=> {
    fetchData();
  },[]);

  return <AppContext_27.Provider value={{...state, clearCart, increase,decrease, remove}}>
     {children}  
  </AppContext_27.Provider>
};

const useGlobalContext_xx = () => {
  return useContext(AppContext_27);

}

export {AppProvider_27, useGlobalContext_xx} ;
