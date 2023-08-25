import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiUrl";
import { STATUS } from "../utils/status";

const initialState = {
  products : [],
  productsStatus : STATUS.IDLE,
  productSingle : [],
  productSingleStatus : STATUS.IDLE
}

const productsSlice = createSlice({
  name : 'product',
  initialState,
  reducers:{},
  extraReducers :(builder)=>{
    builder
    .addCase(fetchAsyncProducts.pending, (state , action)=>{
      state.productsStatus = STATUS.LOADING;
    })
    .addCase(fetchAsyncProducts.fulfilled, (state , action)=>{
      state.productsStatus = STATUS.SCUCCEEDED;
      state.products = action.payload
    })
    .addCase(fetchAsyncProducts.rejected, (state , action)=>{
      state.productsStatus = STATUS.FAILED;
    })


    // single Product 

    .addCase(fetchAsyncProductSingle.pending, (state , action)=>{
      state.productsStatus = STATUS.LOADING;
    })
    .addCase(fetchAsyncProductSingle.fulfilled, (state , action)=>{
      state.productsStatus = STATUS.SCUCCEEDED;
      state.productSingle = action.payload
    })
    .addCase(fetchAsyncProductSingle.rejected, (state , action)=>{
      state.productsStatus = STATUS.FAILED;
    })
  }
})

export const fetchAsyncProducts = createAsyncThunk(
  'products/fetch' , async(limit)=>{
    const response = await fetch(`${BASE_URL}products?limit=${limit}`);
    const data = await response.json();
    return data.products;
  }
)

export const fetchAsyncProductSingle = createAsyncThunk(
  'productSingle/fetch' , async(id)=>{
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
  }
)

export const productsReducer = productsSlice.reducer;