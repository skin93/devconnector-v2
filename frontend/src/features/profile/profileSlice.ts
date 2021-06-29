import { RepoType } from '../../types/RepoType';
import { ProfileType } from '../../types/ProfileType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { fetchCurrentProfile, fetchProfiles } from './profileApi';

export type ProfileStateType = {
  profile: ProfileType | null;
  profiles: ProfileType[];
  repos: RepoType[];
  isLoading: boolean;
  error: object;
};

const initialState: ProfileStateType = {
  profile: null,
  profiles: [],
  repos: [],
  isLoading: true,
  error: {},
};

export const getCurrentProfile = createAsyncThunk(
  'profile/getCurrentProfile',
  async () => {
    return await fetchCurrentProfile();
  }
);

export const getProfiles = createAsyncThunk('profile/getProfiles', async () => {
  return await fetchProfiles();
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(getCurrentProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.profile = null;
        state.error = action.payload as object;
      })
      .addCase(getProfiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profiles.push(action.payload);
      })
      .addCase(getProfiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as object;
      });
  },
});

export const profileState = (state: RootState) => state.profile;

export default profileSlice.reducer;
