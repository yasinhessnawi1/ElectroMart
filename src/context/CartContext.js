import { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // eslint-disable-next-line no-case-declarations
      const existingItem = state.find((item) => item.ID === action.payload.ID);
      if (existingItem) {
        // Increase quantity of the existing item
        return state.map((item) =>
          item.ID === action.payload.ID
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Add new item if not already in cart
      return [...state, { ...action.payload, quantity: 1 }];

    case 'REMOVE_ITEM':
      // Remove item from cart
      return state.filter((item) => item.ID !== action.payload);

    case 'UPDATE_ITEM_QUANTITY':
      // Ensure we do not set a non-positive quantity
      if (action.payload.quantity < 1) {
        // If quantity is less than 1, remove the item
        return state.filter((item) => item.ID !== action.payload.ID);
      }
      // Update the quantity of the specified item
      return state.map((item) =>
        item.ID === action.payload.ID
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
    case 'CLEAR_CART':
      // Clear the cart
      return [];

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeFromCart = (productId) => {
    console.log('Removing product with ID:', productId);
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateItemQuantity = (productId, quantity) => {
    console.log('Updating product', productId, 'to quantity', quantity);
    dispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { ID: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
