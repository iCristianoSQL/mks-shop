import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItem {
  id: number;
  photo: string;
  name: string;
  price: string;
  quantity: number;
}

interface IChangeItemQuantity {
  id: number;
  type: "increase" | "decrease";
  price: string;
}

export interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = {
  items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      action.payload.quantity ++
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].price = (parseFloat(state.items[existingItemIndex].price) + parseFloat(action.payload.price)).toString();
        state.items[existingItemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    changeItemQuantity: (state, action: PayloadAction<IChangeItemQuantity>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
    
      if (existingItemIndex >= 0) {
        const item = state.items[existingItemIndex];
        if (action.payload.type === "increase") {
          item.quantity++;
            state.items[existingItemIndex].price = (parseFloat(state.items[existingItemIndex].price) + parseFloat(action.payload.price)).toString();
        } else {
          item.quantity--;
            state.items[existingItemIndex].price = (parseFloat(state.items[existingItemIndex].price) - parseFloat(action.payload.price)).toString();
        }
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingItemIndex >= 0) {
        state.items.splice(existingItemIndex, 1);
      }
    },
    cleanCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, changeItemQuantity, removeItem, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;