import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItem {
  id: number;
  photo: string;
  name: string;
  price: string;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = {
  items: [],
};

export const useCart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].price = (parseFloat(state.items[existingItemIndex].price) + parseFloat(action.payload.price)).toString();
        state.items[existingItemIndex].quantity =
          (state.items[existingItemIndex].quantity || 0) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1, price: action.payload.price });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
    
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].price = (parseFloat(state.items[existingItemIndex].price) + parseFloat(state.items[existingItemIndex].price)).toString();
        state.items[existingItemIndex].quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
    
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].price = (parseFloat(state.items[existingItemIndex].price) - parseFloat(state.items[existingItemIndex].price)).toString();
        state.items[existingItemIndex].quantity--;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = useCart.actions;

export default useCart.reducer;
