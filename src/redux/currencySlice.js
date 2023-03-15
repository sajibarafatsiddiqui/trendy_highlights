// redux/rockets/rocketsSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.currencybeacon.com/v1/';
const apiKey = 'f7b89fe31c77772c4972eea6dc268fcb';

export const fetchAllCurrencyAgainstBase = createAsyncThunk(
  'currency/fetchAllCurrencyAgainstBase',
  async (base, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}latest/?api_key=${apiKey}&base=${base}`);
      if (response.data === '') return {};
      return response.data.response.rates;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  rates: {},
  ifSucceed: false,
  isLoading: false,
  isError: false,
};

const currencySlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCurrencyAgainstBase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCurrencyAgainstBase.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.ifSucceed = true;
        state.isLoading = false;
      });
  },
});

export default currencySlice.reducer;
