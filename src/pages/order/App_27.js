import React from 'react';

import { useGlobalContext_xx } from './Context_27';

// components
import Navbar_27 from '../../components/Navbar_27';
import CartContainer_27 from '../../components/CartContainer_27';
// items

const App_27 = () => {
  const { loading, cart } = useGlobalContext_xx();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main className='background'>
      <Navbar_27 />
      <CartContainer_27 />
    </main>
  );
};

export default App_27;
