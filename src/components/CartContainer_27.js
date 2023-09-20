import React, { useState } from 'react';
import CartItem from './CartItem_27';
// import data from '../data';

import { useGlobalContext_xx } from '../pages/order/Context_27';

const CartContainer = () => {
  const {amount} = useGlobalContext_xx()

  // const [cart, setCart] = useState(data);
  // const [total, setTotal] = useState(0);
  // const [amount, setAmount] = useState(0);
  const {cart, total, clearCart } = useGlobalContext_xx();
  if (cart.length === 0) {
    return (

      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>點餐成功</h2>
          <h4 className='empty-cart'>請至櫃台結帳</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
      <h2><a href="/supa_menu_27" class="submit">回上一頁菜單</a></h2>
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
