import React from 'react';
import { ProductContextProvider } from './src/context/ProductContext';
import { CartContextProvider } from './src/context/CartContext';
import { GlobalStyle } from './src/components/globalStyles';

export const wrapPageElement = ({ element }) => (
  <ProductContextProvider>
    <CartContextProvider>
      <GlobalStyle />
      {element}
    </CartContextProvider>
  </ProductContextProvider>
);
