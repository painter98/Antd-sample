import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
  date:'',
  drop:''
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDate: (state,action) => {
      state.date = action.payload;
    },
    setDrop: (state,action) => {
      state.drop = action.payload;
    }
  },
});

export const { setDate,setDrop } = dataSlice.actions;
export default dataSlice.reducer;
