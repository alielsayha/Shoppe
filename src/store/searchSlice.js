import React from 'react';
import { STATUS } from '../utils/status';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../utils/apiUrl';



const initialState = {
  searchProduct : [] , 
  searchStatus : STATUS.IDLE
}

const SearchSlice = createSlice({
  name : 'search',
  initialState,
  reducers:{
    clear:(state , action)=>{
      state.search = [];
    }
  },
  extraReducers :(builder)=>{
    builder.addCase(fetchProductBySearch.pending , (state)=>{
      state.searchStatus = STATUS.LOADING
    })
    .addCase(fetchProductBySearch.fulfilled , (state , action)=>{
      state.searchStatus = STATUS.SCUCCEEDED;
      state.searchProduct = action.payload;
    })
    .addCase(fetchProductBySearch.rejected , (state , action)=>{
      state.searchStatus = STATUS.FAILED;
    })
  }
})

export const fetchProductBySearch = createAsyncThunk(
  'search/fetch',async(search)=>{
    const response = await fetch(`${BASE_URL}products/search?q=${search}`)
    const data = await response.json();
    return data.products;
  }
)

export const {clear} = SearchSlice.actions
export const searchReducer = SearchSlice.reducer