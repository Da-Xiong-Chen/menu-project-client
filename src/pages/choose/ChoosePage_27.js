import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ChatBot from '../../components/ChatBot';



const ChoosePage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const inputValue = searchParams.get('inputValue');

    

    return (
        
        <div class="buttons">
            <h3 className="tablenumber1">您的桌號：{inputValue}</h3>
            <Link to={`/supa_menu_27?inputValue=${encodeURIComponent(inputValue)}`} className="buttonchoose" ><button class="btn-hover color-11">菜單介紹</button></Link>
            <Link to={`/supa_cart_27?inputValue=${encodeURIComponent(inputValue)}`} className="submit"><button class="btn-hover color-2">直接點餐</button></Link>
            <Link to={`https://da-xiong-studio-business-card.vercel.app/random/index.html`}><button class="btn-hover color-1">隨機抽選</button></Link>
        
            <ChatBot/>
        </div>
        

    )
};

export default ChoosePage;