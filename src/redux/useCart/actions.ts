import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface State {
    userName: string;
}

const initialState: State = {
    userName: '',
};

export const useCart = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      changeUser: (state: State, action: PayloadAction<string>) => {
        state.userName = action.payload;
      },
    },
  })

  export const {changeUser} = useCart.actions

  export default useCart.reducer