import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const HomePage_27 = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

    return (
      <div className="homepage-background">
        <div className="login-box">
        <div class="wave -one right"></div>
        <div class="wave -two right"></div>
        <div class="wave -three right"></div>

  <h2>歡迎光臨<br/> 請輸入您的桌號</h2>
  <form>
    <div className="user-box">
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="请输入您的桌號 1-100" name="" required=""/>
      <label>請輸入您的桌號</label>
    </div>
    <Link to={`/supa_menu_27?inputValue=${encodeURIComponent(inputValue)}`} className="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          點餐去
        </Link>
  </form>
  </div>
</div>

    )
}

export default HomePage_27;