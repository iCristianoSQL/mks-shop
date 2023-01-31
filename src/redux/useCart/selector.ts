import { createSelector } from 'reselect';

interface State {
    cart: {
      items: Array<{ id: string; name: string; price: number }>;
    };
}

const cartItems = (state: State) => state.cart.items;

export const cartTotal = createSelector(
  cartItems,
  (items: Array<{ id: string; name: string; price: number }>) => {
    return items.reduce((acc, item) => acc + item.price, 0);
  }
);