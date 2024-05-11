import { createSlice } from '@reduxjs/toolkit'
 export const brickSlice = createSlice({
    name:"brick",
    initialState: {
        name: null
    },
    reducers:{
        setBrick:(state,action)=>{
            state.name = action.payload;
        }
    }
 }

 )
 export const { setBrick } = brickSlice.actions;
export default brickSlice.reducer;