const Reducer_27 = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [], amount: 0, total: 0 }
    }

    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 };
            }
            return cartItem;
        });
        return { ...state, cart: tempCart }
    }

    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                // 减少数量，但不删除项目
                const newAmount = cartItem.amount - 1 >= 0 ? cartItem.amount - 1 : -1;
                return { ...cartItem, amount: newAmount };
            }
            return cartItem;
        });
    
        let temp2Cart = tempCart.filter((item) => item.amount !== -1);
    
        return { ...state, cart: temp2Cart };
    }

    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        }, {
            total: 0,
            amount: 0
        });

        total = parseFloat(total.toFixed(2));

        return { ...state, total, amount: amount }
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload, loading: false }
    }

    if (action.type === 'REMOVE') {
        const filteredCart = state.cart.filter((item) => item.id !== action.payload);
        return { ...state, cart: filteredCart }
    }
}

export default Reducer_27;




// const Reducer_xx = (state, action) => {
//     if(action.type === 'CLEAR_CART'){
//         return {...state, cart: [] , amount: 0, total: 0 }
//     }
    
//     if(action.type === 'INCREASE') {
//         let tempCart = state.cart.map((cartItem) => {
//             if(cartItem.id === action.payload) {
//                 return { ...cartItem, amount: cartItem.amount +1 };
//             }
//             return cartItem;
//         });
//         return {...state, cart: tempCart}
//     }
    // if(action.type === 'DECREASE') {
    //     let tempCart = state.cart.map((cartItem) => {
    //         if(cartItem.id === action.payload) {
                
    //             return { ...cartItem, amount: cartItem.amount -1 };
                
    //         }
    //         return cartItem;
    //     });


//         let temp2Cart = tempCart.filter((item) => item.amount !== 0); 

//         return {...state, cart: temp2Cart}
//     }
//     if(action.type === 'GET_TOTALS'){
//         let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
//             const {price, amount} = cartItem;
//             const itemTotal = price * amount;
//             cartTotal.total += itemTotal;
//             cartTotal.amount += amount;
//             return cartTotal;
//         },{
//             total: 0,
//             amount: 0
//         });

//         total = parseFloat(total.toFixed(2));

//         return {...state, total, amount: amount}
//     }
//     if(action.type === 'LOADING'){
//         return { ...state, loading: true}
//     }
//     if(action.type === 'DISPLAY_ITEMS') {
//         return { ...state, cart:action.payload, loading: false}
//     }
//     if(action.type === 'REMOVE'){
//         const filteredCart = state.cart.filter((item) => item.id !==action.payload );
//         return {...state, cart: filteredCart }
//     }
// }

// export default Reducer_xx;
