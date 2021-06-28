import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';

export interface IAlertState {
  id?: string;
  msg: string;
  alertType: string;
  timeout?: number;
}

const initialState: IAlertState[] = [];

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: {
      reducer: (state, action: PayloadAction<IAlertState>) => {
        state.push(action.payload);
      },
      prepare: ({ msg, alertType }: { msg: string; alertType: string }) => ({
        payload: {
          id: uuidv4(),
          msg,
          alertType,
          timeout: 5000,
        },
      }),
    },
  },
});

export const { setAlert } = alertSlice.actions;

export const alertState = (state: RootState) => state.alert;

export default alertSlice.reducer;
