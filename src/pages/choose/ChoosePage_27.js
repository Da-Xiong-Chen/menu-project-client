import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ChoosePage = () => {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
    const inputValue = searchParams.get('inputValue');


    return (
        
        <div class="buttons">
            <h3 className="tablenumber1">您的桌號：{inputValue}</h3>
            <Link to={`/supa_menu_27?inputValue=${encodeURIComponent(inputValue)}`} className="buttonchoose" ><button class="btn-hover color-1">菜單介紹</button></Link>
            <Link to={`/supa_cart_27?inputValue=${encodeURIComponent(inputValue)}`} className="submit"><button class="btn-hover color-2">直接點餐</button></Link>
            
        </div>

    )
};

export default ChoosePage;