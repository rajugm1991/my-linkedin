import { createSlice } from "@reduxjs/toolkit";


const search=createSlice({
    name : 'search',
    initialState: [],
    reducers:{
        updateSearch:(state,payload)=>{

        }

    }

})


const {updateSearch}=search.actions;

export default search.reducer;