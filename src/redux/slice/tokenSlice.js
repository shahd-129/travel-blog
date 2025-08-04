
import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
   token: null,
   user :null,
 };

 const tokenSlice = createSlice({
   name: 'token',
   initialState,
   reducers: {
     setToken: (state, action) => {
       state.token = action.payload;
       localStorage.setItem('token', action.payload);
     },
     clearToken: (state) => {
       state.token = null;
       localStorage.removeItem('token');
     },
     setUserId : (state , action) =>{
      state.user = action.payload;
       localStorage.setItem('userId', action.payload);
     }
   },
 });

 export const { setToken,clearToken , setUserId } = tokenSlice.actions;
 export default tokenSlice.reducer;
