import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignIn } from '../../constants/requestOptions';
import authService from './authServices';
import axios from 'axios';
import { API_ME } from '../../constants/routes';

// Bringing the user session ID from the local storage.
const sessionID = localStorage.getItem('userToken');
const userToken: string | null = sessionID ? JSON.parse(sessionID) : null;

console.log(sessionID);

// Initial state setup.
const initialState = {
  user: userToken,
  message: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
};

// Register user async function.
export const register: any = createAsyncThunk('/auth/register', async function (user: SignIn, thunkAPI) {
    try {
      return await authService.register(user);
    } catch (error: any) {
      const message =
        (error?.response &&
          error?.response.data &&
          error?.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get the user data.
export const me: any = createAsyncThunk('auth/me', async function(authToken: string | null) {
  if(!authToken) return null;
  // Set token in the authorization headers.
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  const response = await axios.get(API_ME, { headers });
  console.log(response.data);
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: function(state) {
      state.message = '';
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
    },
  },
  extraReducers: function(builder) {
    // addCase methods are very useful, because it let us control things in certain stages of asynchronous operation or server response.
    builder
    .addCase(register.pending, function(state) {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, function(state, action) {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    })
    .addCase(register.rejected, function(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload as string;
      state.user = null;
    })
    .addCase(me.pending, function(state) {
      state.isLoading = true;
    })
    .addCase(me.fulfilled, function(state, action) {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    })
    .addCase(me.rejected, function(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload as string;
      state.user = null;
    });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
