import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';

export type AlertStateType = {
  id?: string;
  msg: string;
  alertType: string;
};

const initialState: AlertStateType[] = [];

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    removeAlert: () => initialState,
    setAlert: {
      reducer: (state, action: PayloadAction<AlertStateType>) => {
        state.push(action.payload);
      },
      prepare: ({ msg, alertType }: { msg: string; alertType: string }) => ({
        payload: {
          id: uuidv4(),
          msg,
          alertType,
        },
      }),
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export const alertState = (state: RootState) => state.alert;

export default alertSlice.reducer;
