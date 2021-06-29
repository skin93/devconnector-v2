import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserType } from '../../types/UserType';
import { FormDataType } from '../../types/FormDataType';
import setAuthToken from '../../utils/setAuthtoken';
import { fetchUser, loginUser, registerUser } from './authApi';

export type AuthStateType = {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: UserType | null;
};

const initialState: AuthStateType = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: true,
  user: null,
};

export const loadUser = createAsyncThunk('auth/loadUser', async () => {
  if (localStorage.getItem('token'))
    setAuthToken(localStorage.getItem('token'));

  return await fetchUser();
});

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }: FormDataType) => {
    return await registerUser(name!, email, password);
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: FormDataType) => {
    return await loginUser(email, password);
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        localStorage.removeItem('token');
        state.token = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        localStorage.removeItem('token');
        state.token = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const authState = (state: RootState) => state.auth;

export const { logout } = authSlice.actions;

export default authSlice.reducer;
