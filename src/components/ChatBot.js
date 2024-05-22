import React from 'react';
import './chatbot.css'; // 引入 CSS 文件

const ChatbotButton = () => {
    return (
        <a href="https://line.me/R/ti/p/%40983foizr" target="_blank" rel="noopener noreferrer" className="floating-button">
            <img src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/menu_project_img/line.png" alt="LINE" />
        </a>
    );
};

export default ChatbotButton;










// import React, { useRef, useEffect } from 'react';


// const ChatBot = () => {
//     const MessengerRef = useRef();
//     useEffect(() => {
//         MessengerRef.current.setAttribute('page_id', '187860644404201');
//         MessengerRef.current.setAttribute('attribution', 'biz_inbox');
    
//         window.fbAsyncInit = function () {
//             window.FB.init({
//                 xfbml: true,
//                 version: 'v16.0',
//             });
//         };
//         (function (d, s, id) {
//             var js,
//                 fjs = d.getElementsByTagName(s)[0];
//             if (d.getElementById(id)) return;
//             js = d.createElement(s);
//             js.id = id;
//             js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//             fjs.parentNode.insertBefore(js, fjs);
//         })(document, 'script', 'facebook-jssdk');
//     }, []);
//     return (
//         <>
//             <div id="fb-root"></div>
//             <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div>
//         </>
//     );
//     }; 
//     export default ChatBot;