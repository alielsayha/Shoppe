import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { BASE_URL } from "../utils/apiUrl";

const initialState = {
  categories : [],
  categoriesStatus : STATUS.IDLE,
  categoriesProduct : [],
  categoriesProductStatus : STATUS.IDLE
}


const CategorySlice = createSlice({
  name : 'category',
  initialState,
  reducers:{
  },
  extraReducers : (builder) =>{
    builder
    .addCase(fetchAsyncCategory.pending , (state , action )=>{
      state.categoriesStatus = STATUS.LOADING;
    })
    .addCase(fetchAsyncCategory.fulfilled , (state , action)=>{
      state.categoriesStatus = STATUS.SCUCCEEDED;
      state.categories = action.payload
    })
    .addCase(fetchAsyncCategory.rejected , (state , action)=>{
      state.categoriesStatus = STATUS.FAILED;
    })


    .addCase(fetchAsyncProductFromCategory.pending , (state , action )=>{
      state.categoriesProductStatus = STATUS.LOADING;
    })
    .addCase(fetchAsyncProductFromCategory.fulfilled , (state , action)=>{
      state.categoriesProductStatus = STATUS.SCUCCEEDED;
      state.categoriesProduct = action.payload
    })
    .addCase(fetchAsyncProductFromCategory.rejected , (state , action)=>{
      state.categoriesProductStatus = STATUS.FAILED;
    })
  }
})

export const fetchAsyncCategory = createAsyncThunk(
  'categories/fetch' , async()=>{
    const response = await fetch(`${BASE_URL}products/categories`) ;
    const data = await response.json();
    return data
  }  
)

export const fetchAsyncProductFromCategory = createAsyncThunk(
  'categoryProduct/fetch' , async(category)=>{
    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const data = await response.json();
    return data.products;
  }
) 

export const CategoryReducer= CategorySlice.reducer