import React, { useState } from 'react';
import CartItem from './CartItem_27';
import CartItem2 from './CartItem_Finish';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// import data from '../data';

import { useGlobalContext_xx } from '../pages/order/Context_27';

const CartContainer = () => {
  const {amount} = useGlobalContext_xx()

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
    const inputValue = searchParams.get('inputValue');


  // const [cart, setCart] = useState(data);
  // const [total, setTotal] = useState(0);
  // const [amount, setAmount] = useState(0);
  const {cart, total, clearCart } = useGlobalContext_xx();
  if (cart.length <= 45) {
    return (

      <section className='cart'>
      {/* cart header */}
      <header>
      <div className='cart2'>       
        <h2>點餐成功</h2>
        <h3>您點的項目</h3>
        <h4>
            今日消費金額為 <span>${total}</span>
          </h4>
           <h4 className='empty-cart'>請持此頁面至櫃台結帳</h4>
        </div>

      </header>
      {/* cart items */}
      <div className='cart1'>
        {cart.map((item) => {
          return <CartItem2 key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <div className='cart-total'>
          <h4>
            目前金額: <span>${total}</span>
          </h4>
        </div>
  
        <h4 className='empty-cart'>請持此頁面至櫃台結帳</h4>

        {/* <button className='btn clear-btn' onClick={clearCart}>
          送出
        </button> */}
      </footer>
    </section>
      // <section className='cart'>
      //   {/* cart header */}
      //   <header>
      //     <h2>點餐成功</h2>
      //     <h4 className='empty-cart'>請至櫃台結帳</h4>
      //   </header>
      // </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
      <h2><Link to={`/supa_menu_27?inputValue=${encodeURIComponent(inputValue)}`} class="submit">回上一頁菜單</Link></h2>
        <h2>您點的項目</h2>

      </header>
      {/* cart items */}
      <div className='cart1'>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            目前金額: <span>${total}</span>
          </h4>
          
        </div>
        <div className='cart-total2'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          送出
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
