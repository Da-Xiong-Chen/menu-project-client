import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const HomePage_27 = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

    return (
        <div class="login-box">
  <h2>歡迎光臨<br/> 請輸入您的桌號</h2>
  <form>
    <div class="user-box">
      <input type="text" value={inputValue} onChange={handleInputChange} name="" required=""/>
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

    )
}

export default HomePage_27;