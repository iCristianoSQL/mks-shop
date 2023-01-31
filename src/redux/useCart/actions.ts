import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface ICartItem {
  id: number;
  photo: string;
  name: string;
  price: string;
  quantity?: number;
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
        state.items = [...state.items, action.payload];
        },
      removeItem: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
    },
  })

  export const {addItem, removeItem} = useCart.actions

  export default useCart.reducer