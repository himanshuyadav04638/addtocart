import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productAPI';

const initialState = {
  items:[],
  cart:[],
  value: 0,
  status: 'idle',
};

export const productAsync = createAsyncThunk(
  'product/fetchAssyn',
  async (amount) => {
    const response = await fetchProduct(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data.data;
  }
);

export const counterSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    increment: (state) => {
    
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    addtoCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removetoCart: (state, action) => {

     state.cart= state.cart.filter(((item)=>item.id !==action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      });
  },
});

export const { increment, decrement, addtoCart,removetoCart } = counterSlice.actions;



export default counterSlice.reducer;
