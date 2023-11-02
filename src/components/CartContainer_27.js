import React, { useState, useEffect } from 'react';
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

  if (cart.length === 0) {
    return (
      <section className='cart'>
      {/* cart header */}
      <header>
      <div className='cart2'>       
        <h2>點餐失敗</h2>
        <h3>您未點選任何項目</h3>
        
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
  
        <button className='custom-btn btn-3'><span><Link to={`https://meun-project-client-main.vercel.app/`} className='word' >點我重新點餐</Link></span></button>


        {/* <button className='btn clear-btn' onClick={clearCart}>
          送出
        </button> */}
      </footer>
    </section>
    );
  };

  if (cart.length <= 30) {
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
           <h4 className='empty-cart'>請持此頁面至櫃台或使用悠遊付支付</h4>
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
  
        <h4 className='empty-cart'>點餐成功 請持此頁面至櫃台或使用悠遊付結帳<br/>線上結帳請於備註打上桌號以及點的餐點編號和點的數量<br/>例如12桌梅花豬肉鍋2份+4份麻辣鴨血請在備註打上12桌3*2+44*4</h4>
        <div className='paymoney'>
            <img src='https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/menu_project_img/money.png'></img>
         </div>

         <button className='custom-btn btn-3'><span><Link to={`https://epkaw.easycard.com.tw/deepLink/receiver/0/2202302053136152`} className='word' >結帳去</Link></span></button>


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
      <h2>
      <Link to={`/choose_page_27?inputValue=${encodeURIComponent(inputValue)}`} class="submit"><button className='button1019'>回選單頁面</button></Link>
      <Link to={`/supa_menu_27?inputValue=${encodeURIComponent(inputValue)}`} class="submit">  <button className='button10191'>回菜單介紹</button></Link>
      </h2>
      <h2></h2>
        <h2>今日提供的餐點</h2>

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
